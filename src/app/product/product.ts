import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product {

  dialogoAbierto = false;
  productoSeleccionado: any = null;

productos = [
  {
    nombreKey: 'PRODUCT_1_NAME',
    categoriaKey: 'PRODUCT_1_CATEGORY',
    descripcionKey: 'PRODUCT_1_DESCRIPTION',
    imagen: 'assets/clorinador.png',
  },
  {
    nombreKey: 'PRODUCT_2_NAME',
    categoriaKey: 'PRODUCT_2_CATEGORY',
    descripcionKey: 'PRODUCT_2_DESCRIPTION',
    imagen: 'assets/electrovalvula.png',
  }
];

  abrirDialogo(producto: any) {
    this.productoSeleccionado = producto;
    this.dialogoAbierto = true;
  }

  cerrarDialogo() {
    this.dialogoAbierto = false;
  }
}
