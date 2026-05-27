import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Detalle } from './components/detalle/detalle';
import { Tareas } from './components/tareas/tareas';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [
    { path:'', component: Inicio},
    { path:'detalle/:id', component: Detalle},
    { path:'tareas', component: Tareas},
    { path:'formulario', component: Formulario}

    
];
