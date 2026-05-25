import { Component, inject, Inject } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { Productos } from '../productos/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [Productos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {


   router=inject(Router);

  //MiProductoSeleccionado:Producto | null = null;


  
 productos:Producto[]=[
    {id:1, nombre:'Laptop', precio:4000, stock:30},
    {id:2, nombre:'Mouse', precio:900, stock:10},
    {id:3, nombre:'Teclado', precio:800, stock: 12}
  
  ];


  recibirProducto(producto: Producto ){
    this.router.navigate(['/detalle', producto.id])
    //this.MiProductoSeleccionado=producto; 
  }
}
