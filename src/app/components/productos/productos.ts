import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import {Producto} from '../../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})


export class Productos {

  @Input() listaProductos:Producto[]=[];
  @Output() productoSeleccionado = new EventEmitter<Producto>();


  seleccionar(producto:Producto){
    this.productoSeleccionado.emit(producto);
  }


}
