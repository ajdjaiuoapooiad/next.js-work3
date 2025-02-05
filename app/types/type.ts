import { number } from "zod"

export interface Post {
    id: number
    title: string
    category: string
    income: number 
    createdAt: Date
}