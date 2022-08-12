import { Component, OnInit } from '@angular/core';
import { ApiCriptoService } from 'src/app/servicio/api-cripto.service';

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


  listaCriptos : string[] = ["BTC","ETH","LTC","TRX", "BCH", "XMR", ];
  busqueda:string = "";
  listaFiltrada : string[] = this.listaCriptos;
  
  constructor(private serv:ApiCriptoService) { 

  }

  ngOnInit(): void {
  }

  agregarNombreACard(cripto:any){

    this.serv.setNombreCripto(cripto); 

  }
  buscador(){

    //console.log(this.busqueda); //texto escrito

    this.listaFiltrada = [];
    this.listaCriptos.forEach(cripto=>{

      // si hay coincidencia, guardo en filtrada
      if(cripto.toLowerCase().includes(this.busqueda.toLowerCase())){
        this.listaFiltrada.push(cripto);
      }
    })

    //console.log(this.listaFiltrada); //lista creada
  }

   


}
