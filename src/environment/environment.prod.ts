import { IEnviroment } from "./environment.interface";


export const environment:IEnviroment= {
    production:false,
    origin:'https://innovative-energy-production.up.railway.app/api/almacenes',
    services:{
        auth:{
            base:'https://innovative-energy-production.up.railway.app/api/almacenes',
            endpoints:{
                login:'/user',
                recover:'/recover',
                refresh:'/refresh-token'
            }
        },
        almacen:{
            base:'https://innovative-energy-production.up.railway.app/api/almacenes',
            endpoints:{
                getAlmacen:'/almacen',
                postAlmacen:'/almacen',
                putAlmacen:'/almacen/?',
                getByIdAlmacen:'/almacen/?',
                getContactoAlmacen:'/contactoAlmacen/?',
                getByIdContactoAlmacen:'/contactoAlmacen/?',
                getTipoNegocio:'/tipoNegocio',
                getSubTipoNegocio:'/subTipoNegocio/?',
                getPropietario:'/propietario/?'
            }
        }
    }
}