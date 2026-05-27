import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import {Producto} from '../../interfaces/producto.interface';
import { EstadoPipe } from '../../pipes/estado-pipe';

@Component({
  selector: 'app-productos',
  imports: [EstadoPipe],
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
