import { Component, inject } from '@angular/core';
import { CurrencyPipe, NgIf, NgFor } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../models/producto';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor, CarritoComponent],
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {
  private carritoService = inject(CarritoService);

  productos: Producto[] = [
    { id: 1, nombre: 'Teclado mecánico', descripcion: 'Switches azules, RGB', precio: 59.99, imagen: 'https://m.media-amazon.com/images/I/51mwo8LoItL.jpg' },
    { id: 2, nombre: 'Mouse gamer', descripcion: '16000 DPI', precio: 29.5, imagen: 'https://m.media-amazon.com/images/I/61+OtcxTeGL.jpg' },
    { id: 3, nombre: 'Monitor 24"', descripcion: '144Hz, IPS', precio: 189.99, imagen: 'https://ss628.liverpool.com.mx/xl/1086983628.jpg' },
    { id: 4, nombre: 'Auriculares', descripcion: 'Cancelación de ruido', precio: 79.0, imagen: 'https://http2.mlstatic.com/D_NQ_NP_906957-MLU77933132990_082024-O.webp' }
  ];

  agregar(producto: Producto) {
    this.carritoService.agregar(producto);
  }
}
