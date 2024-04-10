import {z} from 'zod'
import { paginationValidator } from '../../common/validators'

export const createClientValidator = z.object({
    name:z.string(),
    legalName:z.string()
})

export const getAllClientsValidator = paginationValidator.merge(z.object({}))