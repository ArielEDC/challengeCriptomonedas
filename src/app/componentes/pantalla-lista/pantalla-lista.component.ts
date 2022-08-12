import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-lista',
  templateUrl: './pantalla-lista.component.html',
  styleUrls: ['./pantalla-lista.component.css']
})
export class PantallaListaComponent implements OnInit {

  public nuevaCripto:any = {
    simbolo: "",
    cantidad: ""
  }
  listaCriptos : string[] = ["BTC","ETH","LTC","DAI"];

  constructor() { }

  ngOnInit(): void {
  }

  crearNuevaCard(cripto:any){

    this.nuevaCripto.simbolo = cripto;
    console.log(this.nuevaCripto);   

  }

}
