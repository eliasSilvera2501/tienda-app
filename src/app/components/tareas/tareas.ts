import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TareaService, Tarea } from '../../services/tarea.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tareas',
  imports: [AsyncPipe],
  templateUrl: './tareas.html',
  styleUrl: './tareas.scss',
})
export class Tareas{

  tareaService= inject(TareaService);
  tareas$: Observable<Tarea[]> = this.tareaService.getTareas();
  cdr= inject(ChangeDetectorRef);
  cargando: boolean=true;



  /*ngOnInit(): void {
      this.tareaService.getTareas().subscribe({

        next: (datos) => {
          this.tareas=datos;
          this.cdr.detectChanges();
          this.cargando=false;
        } ,

        error: (err) => {
          console.log(err);
          this.cdr.detectChanges();
          this.cargando=false;
        }

      }

      );


  }
      */

}
