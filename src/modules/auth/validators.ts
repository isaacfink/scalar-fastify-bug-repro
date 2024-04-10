import {z} from 'zod'

export const loginValidator = z.object({
    username:z.string(),
    password:z.string()
})

export const registerValidator = z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string().email(),
    password:z.string().min(8),
    passwordConfirm:z.string().min(8)
}).superRefine(data => {
    if(data.password !== data.passwordConfirm){
        throw new Error('Passwords do not match')
    }
    return data
})