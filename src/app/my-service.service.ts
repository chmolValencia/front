import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyServiceService {

constructor(
  private http :HttpClient
) { 
}

getListaUsuarios(){
  return this.http.get('http://localhost:8081/usuarios/');
}

}
