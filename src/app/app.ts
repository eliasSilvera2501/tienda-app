import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './interfaces/producto.interface';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})




export class App {
  protected readonly title = signal('tienda-app');

  nombre:string="Elias";
  edad:number=26;
  productos: Producto[]=[
    {id:1, nombre:"Laptop", precio:2000, stock:5},
    {id:2, nombre:"Mouse", precio:900, stock:20},
    {id:3, nombre:"Teclado", precio:300, stock:10}

  ];


  
}
