import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('token'); 

  login(data:any){
    return this.http.post(
      environment.services.auth.base + environment.services.auth.endpoints.login,data
    )
  }

  recover(data:any){
    const url = environment.services.auth.base + environment.services.auth.endpoints.recover;

    return this.http.post(url,data);
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }
}
