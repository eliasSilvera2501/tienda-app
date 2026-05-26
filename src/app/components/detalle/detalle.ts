import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class Detalle implements OnInit {

  route= inject(ActivatedRoute);
  productoService= inject(ProductoService)

  id:number = 0;

  producto:Producto | null= null;


    
  ngOnInit() {
      this.id= Number(this.route.snapshot.paramMap.get('id'));
      this.producto=this.productoService.getPorId(this.id);
  }

}
