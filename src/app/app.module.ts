import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCriptoComponent } from './componentes/card-cripto/card-cripto.component';
import { PantallaListaComponent } from './componentes/pantalla-lista/pantalla-lista.component';
import { PantallaCantidadComponent } from './componentes/pantalla-cantidad/pantalla-cantidad.component';
import { PantallaFavoritasComponent } from './componentes/pantalla-favoritas/pantalla-favoritas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardCriptoComponent,
    PantallaListaComponent,
    PantallaCantidadComponent,
    PantallaFavoritasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
