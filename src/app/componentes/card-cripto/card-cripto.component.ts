import { Component, Input, OnInit } from '@angular/core';
import { ApiCriptoService } from 'src/app/servicio/api-cripto.service';

@Component({
  selector: 'app-card-cripto',
  templateUrl: './card-cripto.component.html',
  styleUrls: ['./card-cripto.component.css']
})
export class CardCriptoComponent implements OnInit {

  @Input() nombre:any; //nombre que se inserta en la api

  @Input() cantidad:any;

  @Input() i:any;

  cripto:any;

  constructor(private api:ApiCriptoService) { }

  ngOnInit(): void {
    this.api.verCripto(this.nombre.toLowerCase()).subscribe(data=>{
      this.cripto = data;
      console.log(this.cripto);
    });
  }


  eliminarDeLocalStorage(indice:number){
    let criptos = [];
    let datosLocalStorage = localStorage.getItem(this.api.localStorageKeyName);

    if(datosLocalStorage !== null){
      criptos = JSON.parse(datosLocalStorage);
      criptos.splice(indice,1);
  
      localStorage.setItem(this.api.localStorageKeyName, JSON.stringify(criptos));


    }
    

  }

}
