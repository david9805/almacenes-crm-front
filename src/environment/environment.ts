import { IEnviroment } from "./environment.interface";


export const environment:IEnviroment= {
    production:false,
    origin:'http://localhost:3000/api/almacenes',
    services:{
        auth:{
            base:'http://localhost:3000/api/almacenes',
            endpoints:{
                login:'/user',
                recover:'/recover',
                refresh:'/refresh-token'
            }
        },
        almacen:{
            base:'http://localhost:3000/api/almacenes',
            endpoints:{
                getAlmacen:'/almacen',
                postAlmacen:'/almacen',
                putAlmacen:'/almacen/?',
                getByIdAlmacen:'/almacen/?',
                getContactoAlmacen:'/contactoAlmacen/?',
                getByIdContactoAlmacen:'/contactoAlmacen/?',
                getTipoNegocio:'/tipoNegocio',
                getSubTipoNegocio:'/subTipoNegocio/?',
            }
        }
    }
}