import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  private productos: Producto[]=[ 

    {id:1, nombre:"Laptop", precio:4000, stock:20},
    {id:2, nombre:"Mouse", precio:900, stock:42},
    {id:3, nombre:"Teclado", precio:1000, stock:22}

  ]


  getTodos(): Producto[]{
    return this.productos;
  }

  getPorId(id:number):Producto | null{
    return this.productos.find(p => p.id === id)||null;
  }




}


