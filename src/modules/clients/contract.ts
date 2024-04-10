import { c } from "../../c";
import { createClientValidator, getAllClientsValidator } from "./validators";


export const clientsContract = c.router({
    create:{
        method:'POST',
        path:'/clients',
        body:createClientValidator,
        description:'Create new client',
        responses:{
            200:c.type<{status:'success', id:string}>(),
            400:c.type<{status:'error', message:string}>(),
        }
    },

    getAll:{
        method:'GET',
        path:'/clients',
        responses:{
            200:c.type<{status:'success', clients:{id:string, name:string, legalName:string}[]}>(),
            400:c.type<{status:'error', message:string}>(),
        },
        query:getAllClientsValidator
    },
    getOne:{
        path:'/clients/:id',
        method:'GET',
        responses:{
            200:c.type<{status:'success', client:{id:string, name:string, legalName:string}}>(),
            400:c.type<{status:'error', message:string}>(),
        },
        pathParams:c.type<{id:string}>()

    }
})