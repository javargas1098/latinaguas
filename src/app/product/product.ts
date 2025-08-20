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
  toastVisible = false

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
    },
    {
      nombreKey: 'PRODUCT_3_NAME',
      categoriaKey: 'PRODUCT_3_CATEGORY',
      descripcionKey: 'PRODUCT_3_DESCRIPTION',
      imagen: 'assets/conexionCloro.png',
    },
    {
      nombreKey: 'PRODUCT_4_NAME',
      categoriaKey: 'PRODUCT_4_CATEGORY',
      descripcionKey: 'PRODUCT_4_DESCRIPTION',
      imagen: 'assets/valvulasSheerwood.png',
    },
    {
      nombreKey: 'PRODUCT_5_NAME',
      categoriaKey: 'PRODUCT_5_CATEGORY',
      descripcionKey: 'PRODUCT_5_DESCRIPTION',
      imagen: 'assets/resistencias.png',
    },
    {
      nombreKey: 'PRODUCT_6_NAME',
      categoriaKey: 'PRODUCT_6_CATEGORY',
      descripcionKey: 'PRODUCT_6_DESCRIPTION',
      imagen: 'assets/filtroGasCloro.png',
    },
    {
      nombreKey: 'PRODUCT_7_NAME',
      categoriaKey: 'PRODUCT_7_CATEGORY',
      descripcionKey: 'PRODUCT_7_DESCRIPTION',
      imagen: 'assets/trampaCloro.png',
    },
    {
      nombreKey: 'PRODUCT_8_NAME',
      categoriaKey: 'PRODUCT_8_CATEGORY',
      descripcionKey: 'PRODUCT_8_DESCRIPTION',
      imagen: 'assets/basculaTonelada.png',
    },
    {
      nombreKey: 'PRODUCT_9_NAME',
      categoriaKey: 'PRODUCT_9_CATEGORY',
      descripcionKey: 'PRODUCT_9_DESCRIPTION',
      imagen: 'assets/detectorFugas.png',
    },
      {
      nombreKey: 'PRODUCT_10_NAME',
      categoriaKey: 'PRODUCT_10_CATEGORY',
      descripcionKey: 'PRODUCT_10_DESCRIPTION',
      imagen: 'assets/cilindroCloro.png',
    },
    {
      nombreKey: 'PRODUCT_11_NAME',
      categoriaKey: 'PRODUCT_11_CATEGORY',
      descripcionKey: 'PRODUCT_11_DESCRIPTION',
      imagen: 'assets/cilindoCloro68.png',
    },
      {
      nombreKey: 'PRODUCT_12_NAME',
      categoriaKey: 'PRODUCT_12_CATEGORY',
      descripcionKey: 'PRODUCT_12_DESCRIPTION',
      imagen: 'assets/movimientoCloro.png',
    },
    {
      nombreKey: 'PRODUCT_13_NAME',
      categoriaKey: 'PRODUCT_13_CATEGORY',
      descripcionKey: 'PRODUCT_13_DESCRIPTION',
      imagen: 'assets/bombasDosificadoras.png',
    },
    {
      nombreKey: 'PRODUCT_14_NAME',
      categoriaKey: 'PRODUCT_14_CATEGORY',
      descripcionKey: 'PRODUCT_14_DESCRIPTION',
      imagen: 'assets/bombaReforzadora.png',
    },
      {
      nombreKey: 'PRODUCT_15_NAME',
      categoriaKey: 'PRODUCT_15_CATEGORY',
      descripcionKey: 'PRODUCT_15_DESCRIPTION',
      imagen: 'assets/medidorNivel.png',
    },
    {
      nombreKey: 'PRODUCT_16_NAME',
      categoriaKey: 'PRODUCT_16_CATEGORY',
      descripcionKey: 'PRODUCT_16_DESCRIPTION',
      imagen: 'assets/macroMedidores.png',
    },
    {
      nombreKey: 'PRODUCT_17_NAME',
      categoriaKey: 'PRODUCT_17_CATEGORY',
      descripcionKey: 'PRODUCT_17_DESCRIPTION',
      imagen: 'assets/microMedidores.png',
    },
    {
      nombreKey: 'PRODUCT_18_NAME',
      categoriaKey: 'PRODUCT_18_CATEGORY',
      descripcionKey: 'PRODUCT_18_DESCRIPTION',
      imagen: 'assets/medidorElectro.png',
    },
    {
      nombreKey: 'PRODUCT_19_NAME',
      categoriaKey: 'PRODUCT_19_CATEGORY',
      descripcionKey: 'PRODUCT_19_DESCRIPTION',
      imagen: 'assets/medidorUltra.png',
    },
      {
      nombreKey: 'PRODUCT_20_NAME',
      categoriaKey: 'PRODUCT_20_CATEGORY',
      descripcionKey: 'PRODUCT_20_DESCRIPTION',
      imagen: 'assets/kitSeguridadA.png',
    },
    {
      nombreKey: 'PRODUCT_21_NAME',
      categoriaKey: 'PRODUCT_21_CATEGORY',
      descripcionKey: 'PRODUCT_21_DESCRIPTION',
      imagen: 'assets/kitSeguridadB.jpg',
    },
    {
      nombreKey: 'PRODUCT_22_NAME',
      categoriaKey: 'PRODUCT_22_CATEGORY',
      descripcionKey: 'PRODUCT_22_DESCRIPTION',
      imagen: 'assets/trajes.jpg',
    },
      {
      nombreKey: 'PRODUCT_23_NAME',
      categoriaKey: 'PRODUCT_23_CATEGORY',
      descripcionKey: 'PRODUCT_23_DESCRIPTION',
      imagen: 'assets/autoContenedor.png',
    },
    {
      nombreKey: 'PRODUCT_24_NAME',
      categoriaKey: 'PRODUCT_24_CATEGORY',
      descripcionKey: 'PRODUCT_24_DESCRIPTION',
      imagen: 'assets/mascara.png',
    },
      {
      nombreKey: 'PRODUCT_25_NAME',
      categoriaKey: 'PRODUCT_25_CATEGORY',
      descripcionKey: 'PRODUCT_25_DESCRIPTION',
      imagen: 'assets/vitrina.png',
    },
    {
      nombreKey: 'PRODUCT_26_NAME',
      categoriaKey: 'PRODUCT_26_CATEGORY',
      descripcionKey: 'PRODUCT_26_DESCRIPTION',
      imagen: 'assets/ducha.png',
    },
      {
      nombreKey: 'PRODUCT_27_NAME',
      categoriaKey: 'PRODUCT_27_CATEGORY',
      descripcionKey: 'PRODUCT_27_DESCRIPTION',
      imagen: 'assets/manga.png',
    },
    {
      nombreKey: 'PRODUCT_28_NAME',
      categoriaKey: 'PRODUCT_28_CATEGORY',
      descripcionKey: 'PRODUCT_28_DESCRIPTION',
      imagen: 'assets/canaleta.jpg',
    },
      {
      nombreKey: 'PRODUCT_29_NAME',
      categoriaKey: 'PRODUCT_29_CATEGORY',
      descripcionKey: 'PRODUCT_29_DESCRIPTION',
      imagen: 'assets/planta.jpg',
    },
    {
      nombreKey: 'PRODUCT_30_NAME',
      categoriaKey: 'PRODUCT_30_CATEGORY',
      descripcionKey: 'PRODUCT_30_DESCRIPTION',
      imagen: 'assets/falsosFondos.jpg',
    },
    {
      nombreKey: 'PRODUCT_31_NAME',
      categoriaKey: 'PRODUCT_31_CATEGORY',
      descripcionKey: 'PRODUCT_31_DESCRIPTION',
      imagen: 'assets/torre.png',
    },
    {
      nombreKey: 'PRODUCT_32_NAME',
      categoriaKey: 'PRODUCT_32_CATEGORY',
      descripcionKey: 'PRODUCT_32_DESCRIPTION',
      imagen: 'assets/jarra4.png',
    },
    {
      nombreKey: 'PRODUCT_33_NAME',
      categoriaKey: 'PRODUCT_33_CATEGORY',
      descripcionKey: 'PRODUCT_33_DESCRIPTION',
      imagen: 'assets/jarra6.png',
    },
    {
      nombreKey: 'PRODUCT_34_NAME',
      categoriaKey: 'PRODUCT_34_CATEGORY',
      descripcionKey: 'PRODUCT_34_DESCRIPTION',
      imagen: 'assets/turbidimetro.jpg',
    },
    {
      nombreKey: 'PRODUCT_35_NAME',
      categoriaKey: 'PRODUCT_35_CATEGORY',
      descripcionKey: 'PRODUCT_35_DESCRIPTION',
      imagen: 'assets/ph.jpg',
    },
    {
      nombreKey: 'PRODUCT_36_NAME',
      categoriaKey: 'PRODUCT_36_CATEGORY',
      descripcionKey: 'PRODUCT_36_DESCRIPTION',
      imagen: 'assets/colorimetro.jpg',
    },
    {
      nombreKey: 'PRODUCT_37_NAME',
      categoriaKey: 'PRODUCT_37_CATEGORY',
      descripcionKey: 'PRODUCT_37_DESCRIPTION',
      imagen: 'assets/conductivimetros.jpeg',
    },
    {
      nombreKey: 'PRODUCT_38_NAME',
      categoriaKey: 'PRODUCT_38_CATEGORY',
      descripcionKey: 'PRODUCT_38_DESCRIPTION',
      imagen: 'assets/fotometro.jpg',
    },
    {
      nombreKey: 'PRODUCT_39_NAME',
      categoriaKey: 'PRODUCT_39_CATEGORY',
      descripcionKey: 'PRODUCT_39_DESCRIPTION',
      imagen: 'assets/vidrio.jpg',
    },
      {
      nombreKey: 'PRODUCT_40_NAME',
      categoriaKey: 'PRODUCT_40_CATEGORY',
      descripcionKey: 'PRODUCT_40_DESCRIPTION',
      imagen: 'assets/cloroG.jpg',
    },
    {
      nombreKey: 'PRODUCT_41_NAME',
      categoriaKey: 'PRODUCT_41_CATEGORY',
      descripcionKey: 'PRODUCT_41_DESCRIPTION',
      imagen: 'assets/sulfatoA.jpg',
    },
    {
      nombreKey: 'PRODUCT_42_NAME',
      categoriaKey: 'PRODUCT_42_CATEGORY',
      descripcionKey: 'PRODUCT_42_DESCRIPTION',
      imagen: 'assets/sulfatoB.jpg',
    },
    {
      nombreKey: 'PRODUCT_43_NAME',
      categoriaKey: 'PRODUCT_43_CATEGORY',
      descripcionKey: 'PRODUCT_43_DESCRIPTION',
      imagen: 'assets/policloruro.jpeg',
    },
      {
      nombreKey: 'PRODUCT_44_NAME',
      categoriaKey: 'PRODUCT_44_CATEGORY',
      descripcionKey: 'PRODUCT_44_DESCRIPTION',
      imagen: 'assets/aluminioLiquido.jpg',
    },
    {
      nombreKey: 'PRODUCT_45_NAME',
      categoriaKey: 'PRODUCT_45_CATEGORY',
      descripcionKey: 'PRODUCT_45_DESCRIPTION',
      imagen: 'assets/hipoCalcio.png',
    },
      {
      nombreKey: 'PRODUCT_46_NAME',
      categoriaKey: 'PRODUCT_46_CATEGORY',
      descripcionKey: 'PRODUCT_46_DESCRIPTION',
      imagen: 'assets/HipoSodio.jpg',
    },
    {
      nombreKey: 'PRODUCT_47_NAME',
      categoriaKey: 'PRODUCT_47_CATEGORY',
      descripcionKey: 'PRODUCT_47_DESCRIPTION',
      imagen: 'assets/floculante.jpg',
    },
    {
      nombreKey: 'PRODUCT_48_NAME',
      categoriaKey: 'PRODUCT_48_CATEGORY',
      descripcionKey: 'PRODUCT_48_DESCRIPTION',
      imagen: 'assets/grava.png',
    },
      {
      nombreKey: 'PRODUCT_49_NAME',
      categoriaKey: 'PRODUCT_49_CATEGORY',
      descripcionKey: 'PRODUCT_49_DESCRIPTION',
      imagen: 'assets/arena.png',
    },
    {
      nombreKey: 'PRODUCT_50_NAME',
      categoriaKey: 'PRODUCT_50_CATEGORY',
      descripcionKey: 'PRODUCT_50_DESCRIPTION',
      imagen: 'assets/antra.png',
    },
    {
      nombreKey: 'PRODUCT_51_NAME',
      categoriaKey: 'PRODUCT_51_CATEGORY',
      descripcionKey: 'PRODUCT_51_DESCRIPTION',
      imagen: 'assets/carbon.jpg',
    },
  ];

  abrirDialogo(producto: any) {
    this.productoSeleccionado = producto;
    this.dialogoAbierto = true;
  }

  cerrarDialogo() {
    this.dialogoAbierto = false;
  }

  agregarAlCarrito(producto: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    // Buscar si ya existe
   const index = carrito.findIndex((p: { nombreKey: string }) => p.nombreKey === producto.nombreKey);

    if (index > -1) {
      // Ya existe → aumentar cantidad
      carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
      // No existe → agregar con cantidad inicial
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar navbar en tiempo real
    window.dispatchEvent(new Event('storage'));

    // Mostrar toast
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 2000);

    this.cerrarDialogo();
  }




}
