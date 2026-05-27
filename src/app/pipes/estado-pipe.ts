import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado',
})
export class EstadoPipe implements PipeTransform {
  transform(stock:number, umbral:number=5): String {
    if (stock===0) {
      return "Sin Stock";
    }else if(stock < umbral){
      return "Stock bajo"
    }else{
      return "Disponible"
    }
  }
}
