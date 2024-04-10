import {z} from 'zod'

export const paginationValidator = z.object({
    page:z.coerce.number().positive().nullable().optional().default(1),
    limit:z.coerce.number().positive().nullable().optional().default(10)
})