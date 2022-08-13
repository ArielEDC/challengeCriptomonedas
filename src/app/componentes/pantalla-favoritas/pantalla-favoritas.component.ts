import { Component, OnInit } from '@angular/core';
import { ApiCriptoService } from 'src/app/servicio/api-cripto.service';

@Component({
  selector: 'app-pantalla-favoritas',
  templateUrl: './pantalla-favoritas.component.html',
  styleUrls: ['./pantalla-favoritas.component.css']
})
export class PantallaFavoritasComponent implements OnInit {

  // de LocalStorage

  favoritos:any[]=[];
  
  

  constructor(private serv:ApiCriptoService) { }

  ngOnInit(): void {
    this.cargarLocalStorage();
  }
  
  cargarLocalStorage(){

    let datosLocalStorage = localStorage.getItem(this.serv.localStorageKeyName);
    if(datosLocalStorage !== null){
      // convierto a json
      this.favoritos = JSON.parse(datosLocalStorage);
      //console.log(this.favoritos);
    }
  }


}
