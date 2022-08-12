import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaCantidadComponent } from './componentes/pantalla-cantidad/pantalla-cantidad.component';
import { PantallaFavoritasComponent } from './componentes/pantalla-favoritas/pantalla-favoritas.component';
import { PantallaListaComponent } from './componentes/pantalla-lista/pantalla-lista.component';

const routes: Routes = [
  {path:"favoritas", component: PantallaFavoritasComponent},
  {path:"lista", component: PantallaListaComponent, children:[
    
  ]},
  {path:"", redirectTo:"/favoritas", pathMatch:"full"},
  {path:"cantidad", component: PantallaCantidadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
