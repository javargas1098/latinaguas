import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  selectedLang = 'es';
  darkBackground = false;
  isMobile: boolean = false;
  carrito: any[] = [];
  carritoAbierto = false;

  constructor(private translate: TranslateService, public router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    
    // Detectar si el fondo es claro
    // Si está arriba de cierto punto (donde hay fondo claro), activamos degradado
    if (scrollPosition > 50) {
      this.darkBackground = true;
    } else {
      this.darkBackground = false;
    }
  }

ngOnInit() {
  const savedLang = localStorage.getItem('lang') || 'es';
  this.selectedLang = savedLang;
  this.translate.use(savedLang);
  this.cargarCarrito();

  window.addEventListener('storage', () => {
    this.cargarCarrito();
  });
}

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.selectedLang = lang;
  }

    toggleMenu() {
    this.isMobile = !this.isMobile;
  }

  cargarCarrito() {
  const data = localStorage.getItem('carrito');
  this.carrito = data ? JSON.parse(data) : [];
}

toggleCarrito() {
  this.carritoAbierto = !this.carritoAbierto;

  // Mostrar/ocultar botón flotante de WhatsApp
  const wa = document.getElementById('whatsapp-container');
  if (wa) wa.style.display = this.carritoAbierto ? 'none' : 'flex';
}

eliminarDelCarrito(item: any) {
  this.carrito = this.carrito.filter(p => p.nombreKey !== item.nombreKey);
  localStorage.setItem('carrito', JSON.stringify(this.carrito));
}


cotizarWhatsApp() {
  Swal.fire({
    title: '¿Cómo te llamas?',
    input: 'text',
    inputPlaceholder: 'Escribe tu nombre',
    confirmButtonText: 'Cotizar en WhatsApp',
    confirmButtonColor: '#25D366',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (!result.isConfirmed) return;
    const nombre = (result.value || '').trim();
    if (!nombre) {
      Swal.fire('Ingresa tu nombre para continuar');
      return;
    }

    console.log('Carrito raw ->', this.carrito); // debug: mira la estructura real

    const listLines: string[] = [];
    const summaryLines: string[] = [];

    const resolveName = (p: any) => {
      // 1) propiedades directas
      if (p.nombre) return p.nombre;
      if (p.name) return p.name;
      // 2) si guardaste una clave tipo "PRODUCT_3_NAME"
      const key = p.nombreKey || p.key || p.id || p.productKey;
      if (typeof key === 'string') {
        // intentar ngx-translate (sincrónico)
        const t = this.translate.instant(key);
        if (t && t !== key) return t;
        // intentar con sufijo _NAME (por si guardaste solo PRODUCT_3)
        const alt = key.endsWith('_NAME') ? key : `${key}_NAME`;
        const t2 = this.translate.instant(alt);
        if (t2 && t2 !== alt) return t2;
      }
      // 3) fallback a cualquier otra propiedad de texto o a la clave cruda
      return p.productoNombre || p.productName || key || 'Producto';
    };

    this.carrito.forEach((p: any) => {
      const qty = p.cantidad ?? p.quantity ?? p.qty ?? 1;
      const nombreProducto = resolveName(p);
      listLines.push(`• ${nombreProducto} (Cantidad: ${qty})`);
      summaryLines.push(`${nombreProducto}: ${qty} unidad(es)`);
    });

    const mensaje =
      `Buenas, soy ${nombre} y estoy interesado en:\n\n` +
      `${listLines.join('\n')}\n\n` +
      `Resumen de pedido:\n${summaryLines.join('\n')}`;

    const url = `https://wa.me/573108523813?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });
}


}
