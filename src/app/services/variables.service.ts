import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  constructor() {
    if (localStorage.getItem('usuario')){
      this.convertJson(localStorage.getItem('usuario')!);
    }
   }

  private _idUsuario: string = '';
  public get idUsuario(): string {
    return this._idUsuario;
  }
  public set idUsuario(value: string) {
    this._idUsuario = value;
  }

  private _username: string = '';
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  private _nombreCompleto: string = '';
  get nombreCompleto(): string {
    return this._nombreCompleto;
  }
  set nombreCompleto(value: string) {
    this._nombreCompleto = value;
  }
  private _estado: string = '';
  get estado(): string {
    return this._estado;
  }
  set estado(value: string) {
    this._estado = value;
  }
  private _visualizarAlmacen: string = '';
  get visualizarAlmacen(): string {
    return this._visualizarAlmacen;
  }
  set visualizarAlmacen(value: string) {
    this._visualizarAlmacen = value;
  }
  private _modificarContacto: string = '';
  get modificarContacto(): string {
    return this._modificarContacto;
  }
  set modificarContacto(value: string) {
    this._modificarContacto = value;
  }
  private _modificarPropietario: string = '';
  get modificarPropietario(): string {
    return this._modificarPropietario;
  }
  set modificarPropietario(value: string) {
    this._modificarPropietario = value;
  }

  private _modificaAlmacen: string = '';
  public get modificaAlmacen(): string {
    return this._modificaAlmacen;
  }
  public set modificaAlmacen(value: string) {
    this._modificaAlmacen = value;
  }


  private _visualizarContacto: string = '';
  public get visualizarContacto(): string {
    return this._visualizarContacto;
  }
  public set visualizarContacto(value: string) {
    this._visualizarContacto = value;
  }

  private _visualizarPropietario: string = '';
  public get visualizarPropietario(): string {
    return this._visualizarPropietario;
  }
  public set visualizarPropietario(value: string) {
    this._visualizarPropietario = value;
  }



  convertJson(jsonString:string){

    const data = JSON.parse(jsonString);
    if (data.usuario) this.username = data.username;
    if (data.nombreCompleto) this.nombreCompleto = data.nombreCompleto;
    if (data.estado) this.estado = data.estado;
    this.visualizarAlmacen = data.visualizarAlmacen ? data.visualizarAlmacen : 'N' 
    this.modificarPropietario = data.modificarPropietario ? data.modificarPropietario : 'N' 
    this.modificarContacto = data.modificarContacto ? data.modificarContacto : 'N' 
    this.modificaAlmacen = data.modificaAlmacen ? data.modificaAlmacen : 'N' 
    this.visualizarPropietario = data.visualizarPropietario ? data.visualizarPropietario : 'N' 
    this.visualizarContacto = data.visualizarContacto ? data.visualizarContacto : 'N'     
  }

}
