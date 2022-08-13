import { Component, OnInit } from '@angular/core';
import { ApiCriptoService } from 'src/app/servicio/api-cripto.service';


@Component({
  selector: 'app-pantalla-cantidad',
  templateUrl: './pantalla-cantidad.component.html',
  styleUrls: ['./pantalla-cantidad.component.css']
})
export class PantallaCantidadComponent implements OnInit {

  input = "";
  simbolo:any = this.serv.getCripto();
  cotizacion:any = "";

  constructor(private serv:ApiCriptoService) { }

  ngOnInit(): void {
    this.serv.verCripto(this.simbolo.simbolo.toLowerCase()).subscribe(data=>{
      this.cotizacion = Number.parseFloat(data.prices.USD);
      console.log(this.cotizacion);
    });
  }

  agregarCantACard(cantidad:any){
    this.serv.setCantidadCripto(cantidad);

    //metodo interno
    this.agregarCardAStorage(this.serv.nuevaCripto);

    this.serv.limpiarCripto()

  }

  agregarCardAStorage(nuevaCripto:any){
    let criptos = [];
    let datosLocalStorage = localStorage.getItem(this.serv.localStorageKeyName);

    if(datosLocalStorage !== null){
      criptos = JSON.parse(datosLocalStorage);
    }

    criptos.push(nuevaCripto);

    localStorage.setItem(this.serv.localStorageKeyName, JSON.stringify(criptos));
  }


}
