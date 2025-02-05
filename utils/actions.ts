'use server'

import { z } from "zod"
import prisma from "./db"
import { formSchema } from "@/app/create-post/page"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

 


export const post = async ({title, category, income}: z.infer<typeof formSchema>) => {
    await prisma.post.create({
        data: {
            title,
            category,
            income,
        },
    })
    revalidatePath('/')
    redirect('/')
}