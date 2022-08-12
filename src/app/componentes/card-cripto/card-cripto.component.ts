import { Component, Input, OnInit } from '@angular/core';
import { ApiCriptoService } from 'src/app/servicio/api-cripto.service';

@Component({
  selector: 'app-card-cripto',
  templateUrl: './card-cripto.component.html',
  styleUrls: ['./card-cripto.component.css']
})
export class CardCriptoComponent implements OnInit {

  @Input() nombre:any;
  @Input() precio:any;
  @Input() cantidad:any;
  @Input() total:any;
  
  cripto:any;
  localStorageKeyName:string = "criptos";
  //tarjetaCripto:object;

  constructor(private api:ApiCriptoService) { }

  ngOnInit(): void {
    this.api.verCripto(this.nombre).subscribe(data=>{
      this.cripto = data;
      console.log(this.cripto);
    });
  }




  eliminarDeLocalStorage(indice:number){
    let criptos = [];
    let datosLocalStorage = localStorage.getItem(this.localStorageKeyName);

    if(datosLocalStorage !== null){
      criptos = JSON.parse(datosLocalStorage);
      criptos.splice(indice,1);
  
      localStorage.setItem(this.localStorageKeyName, JSON.stringify(criptos));
    }

  }

}
