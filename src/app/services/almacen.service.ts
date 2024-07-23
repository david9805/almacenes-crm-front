import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private http:HttpClient) { }

  private token = localStorage.getItem('token'); // reemplaza esto con la forma en que obtienes tu token

  getAlmacenes(queryParams:any){

    

    // Construir los headers con el Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(environment.services.almacen.base + environment.services.almacen.endpoints.getAlmacen,{headers,params:queryParams})
  }

  getTipoNegocio(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.get(environment.services.almacen.base + environment.services.almacen.endpoints.getTipoNegocio,{headers} )
  }

  getSubTipoNegocio(idTipoNegocio:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const url = environment.services.almacen.base + environment.services.almacen.endpoints.getSubTipoNegocio.replace('?',idTipoNegocio);
    return this.http.get(url,{headers})
  }

  getContactos (idAlmacen:string,params:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }); 

    const queryParams={
      all:params ? params.all : null
    }

    const url = environment.services.almacen.base + environment.services.almacen.endpoints.getContactoAlmacen.replace('?',idAlmacen);
    return this.http.get(url,{headers,params:queryParams})
  }

  postAlmacen(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const url = environment.services.almacen.base + environment.services.almacen.endpoints.postAlmacen;
    return this.http.post(url,data,{headers})
  }

  putAlmacen(data:any,idAlmacen:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const url = environment.services.almacen.base + environment.services.almacen.endpoints.putAlmacen.replace('?',idAlmacen);
    return this.http.put(url,data,{headers})
  }

  getAlmacenById(idAlmacen:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }); 

    const url = environment.services.almacen.base + environment.services.almacen.endpoints.getByIdAlmacen.replace('?',idAlmacen);

    return this.http.get(url,{headers});
  }

  getPropietario(idAlmacen:string,queryParams:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }); 

    
    const url = environment.services.almacen.base + environment.services.almacen.endpoints.getPropietario.replace('?',idAlmacen);

    return this.http.get(url,{headers,params:queryParams})
  }

  
}
