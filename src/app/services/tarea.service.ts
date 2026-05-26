import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';



export interface Tarea{
  id:number;
  title:string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})



export class TareaService {

  http = inject(HttpClient);

  getTareas():Observable<Tarea[]>{

    return this.http.get<Tarea[]>('https://jsonplaceholder.typicode.com/todos');
  }

}

