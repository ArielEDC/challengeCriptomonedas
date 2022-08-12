import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCriptoService {

  constructor(private http:HttpClient) { }


  verCripto(cripto:string):Observable<any>{
    return this.http.get("https://api.cryptapi.io/"+cripto+"/info");
  }

  //nuevaCripto()
}
