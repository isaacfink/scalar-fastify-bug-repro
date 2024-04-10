import { c } from "../../c";
import { loginValidator, registerValidator } from "./validators";

export const authContract = c.router({
    login:{
        method:'POST',
        path:'/auth/login',
        body:loginValidator,
        description:'Login to website',
        responses:{
            200:c.type<{status:'success', token:string}>(),
            400:c.type<{status:'error', message:string}>(),
        }
    },
    register:{
        method:'POST',
        path:'/auth/register',
        body:registerValidator,
        description:'Register to website',
        responses:{
            200:c.type<{status:'success', token:string}>(),
            400:c.type<{status:'error', message:string}>(),
        },
    },
    me:{
        method:'GET',
        path:'/auth/me',
        description:'Get current user',
        responses:{
            200:c.type<{status:'success', user:{id:string, email:string, firstName:string, lastName:string}}>(),
            400:c.type<{status:'error', message:string}>(),
        }
    }
})

const authRouter = c.router(authContract, {
    
})