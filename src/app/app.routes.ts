import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { Superheroes } from './components/superheroes/superheroes';
import { Solicitud } from './components/solicitud/solicitud';
import { Supervillanos } from './components/supervillanos/supervillanos';
import { EscribirSuperjefe } from './components/escribir-superjefe/escribir-superjefe';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'superheroes', component: Superheroes },
  { path: 'supervillanos', component: Supervillanos },
  { path: 'escribir-jefe', component: EscribirSuperjefe },
  { path: 'solicitud', component: Solicitud },
  { path: '**', component: Notfound },
];
