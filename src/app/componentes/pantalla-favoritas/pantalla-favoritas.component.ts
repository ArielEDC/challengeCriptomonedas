import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-favoritas',
  templateUrl: './pantalla-favoritas.component.html',
  styleUrls: ['./pantalla-favoritas.component.css']
})
export class PantallaFavoritasComponent implements OnInit {

  nombre = "eth";
  
  favoritos=[];
  localStorageKeyName:string = "criptos";

  constructor() { }

  ngOnInit(): void {
    this.cargarLocalStorage();
  }
  
  cargarLocalStorage(){

    let datosLocalStorage = localStorage.getItem(this.localStorageKeyName);
    if(datosLocalStorage !== null){
      // convierto a json
      this.favoritos = JSON.parse(datosLocalStorage);
      console.log(this.favoritos);
    }
  }

}
