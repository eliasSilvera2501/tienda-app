import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class Detalle implements OnInit {

  route= inject(ActivatedRoute);

  id:number = 0;

  producto:Producto | null= null;

  productos:Producto[]=[
      {id:1, nombre:'Laptop', precio:4000, stock:30},
      {id:2, nombre:'Mouse', precio:900, stock:10},
      {id:3, nombre:'Teclado', precio:800, stock: 12}
    
    ];
    
  ngOnInit() {
      this.id= Number(this.route.snapshot.paramMap.get('id'));
      this.producto=this.productos.find(p => p.id===this.id)|| null;
  }

}
