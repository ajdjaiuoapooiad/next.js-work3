import { prisma } from "@/lib/db"
import { NextResponse } from "next/server";


export async function GET(req: Request){
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)
}