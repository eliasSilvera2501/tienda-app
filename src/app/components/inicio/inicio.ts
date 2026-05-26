import { Component, inject, Inject, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { Productos } from '../productos/productos';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-inicio',
  imports: [Productos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit{


   router=inject(Router);

   productoService= inject(ProductoService)

  //MiProductoSeleccionado:Producto | null = null;

  productos:Producto[]= [];

  ngOnInit(): void {
      this.productos= this.productoService.getTodos();
  }


  recibirProducto(producto: Producto ){
    this.router.navigate(['/detalle', producto.id])
    //this.MiProductoSeleccionado=producto; 
  }
}
