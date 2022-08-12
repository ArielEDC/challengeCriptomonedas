import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCriptoService {

  public localStorageKeyName:string = "criptos";
  public nuevaCripto:any = {
    simbolo: "",
    cantidad: ""
  }

  constructor(private http:HttpClient) { }

  // metodo con api externa
  verCripto(cripto:string):Observable<any>{
    return this.http.get("https://api.cryptapi.io/"+cripto+"/info");
  }

  // metodos logica interna de storage
  getCripto(){
    return this.nuevaCripto;
  }
  setNombreCripto(nombre:string){
    this.nuevaCripto.simbolo = nombre;
    console.log(this.nuevaCripto);
  }
  setCantidadCripto(cantidad:string){
    this.nuevaCripto.cantidad = cantidad;
    console.log(this.nuevaCripto);
  }
  limpiarCripto(){
    this.nuevaCripto.simbolo = "";
    this.nuevaCripto.cantidad = "";
  }

}
