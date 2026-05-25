import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
    { path:'', component: Inicio},
    { path:'detalle/:id', component: Detalle}
    
];
