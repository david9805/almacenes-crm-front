export interface IEnviroment {
    production: boolean;
    origin: string;
    services: {
        auth: {
            base: string;
            endpoints: {
                login:string;
                recover:string;
                refresh:string;
            }
        },
        almacen: {
            base: string;
            endpoints: {
                getAlmacen: string;
                postAlmacen: string;
                putAlmacen:string;
                getByIdAlmacen: string;
                getContactoAlmacen:string;
                getByIdContactoAlmacen:string;
                getTipoNegocio:string;
                getSubTipoNegocio:string;
            }
        },        
    }
}
