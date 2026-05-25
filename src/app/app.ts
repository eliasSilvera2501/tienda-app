import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productos } from './components/productos/productos';
import { Producto } from './interfaces/producto.interface';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})




export class App {
  protected readonly title = signal('tienda-app');

  MiProductoSeleccionado:Producto | null = null;


  
 productos:Producto[]=[
    {id:1, nombre:'Laptop', precio:4000, stock:30},
    {id:2, nombre:'Mouse', precio:900, stock:10},
    {id:3, nombre:'Teclado', precio:800, stock: 12}
  
  ];


  recibirProducto(producto: Producto ){
    this.MiProductoSeleccionado=producto;
  }
  
}
