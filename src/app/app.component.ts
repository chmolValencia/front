import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  listaUusuario:any=[];

  constructor(
    private usuario:MyServiceService
  ) { 
  }


  getListaFidAll(){

  this.usuario.getListaUsuarios().subscribe(info=>{
        var data:any = info;
        this.listaUusuario=data;

     })

  }
  
}


