// app/api/upload/route.ts
import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { client } from "@/utils/sanity/client"

cloudinary.config({
        cloud_name: "dqbqxcy6c",
        api_key: "459524452852254",
        api_secret: "LlntPmE6WKtQ2cBI3sXchKOyRCc",
})
 


async function uploadToCloudinary(file: File) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    return new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
        {
            folder: "portfolio-assets",
            resource_type: "auto",
        },
        (error, result) => {
            if (error) reject(error)
            else resolve(result)
        }
        )

        stream.end(buffer)
    })
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        
        console.log("Received upload request")

        const file = formData.get("file") as File | null
        const thumb=formData.get("thumbnail") as File
        

        const title = formData.get("title") as string
        const description = formData.get("description") as string
        const type = formData.get("type") as string

        console.log({
            fileName: file?.name,
            fileSize: file?.size,
            title,
            description,
            type,
            thumb
})



        if (!file) {
        return NextResponse.json(
            { success: false, error: "No file uploaded" },
            { status: 400 }
        )
        }

        const fileUpload = await uploadToCloudinary(file)

        const thumbnail= await uploadToCloudinary(thumb)
        
        // Save to Sanity
        const project = await client.create({
        _type: "project",
        title,
        description,
        type,
        mediaUrl: fileUpload.secure_url,
        public_id: fileUpload.public_id,
        asset_id:fileUpload.asset_id,
        thumbnail: thumbnail.secure_url,
        createdAt: new Date().toISOString(),
        })
        return NextResponse.json({
        success: true,
        project,
        })

    } catch (error: any) {
    console.error("UPLOAD ERROR:", error)

    return NextResponse.json(
        {
        success: false,
        error: error?.message || "Upload failed",
        },
        { status: 500 }
  )
}
}
/*
import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import {client}  from "@/utils/sanity/client"

cloudinary.config({
        cloud_name:'dqbqxcy6c', //process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
        api_key:'459524452852254', //process.env.CLOUDINARY_API_KEY!,
        api_secret:'LlntPmE6WKtQ2cBI3sXchKOyRCc' //process.env.CLOUDINARY_API_SECRET!,
})

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // FILE
    const file = formData.get("file") as File

    // METADATA
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const type = formData.get("type") as string

    if (!file) {
        return NextResponse.json(
            { error: "No file uploaded" },
            { status: 400 }
        )
    }

    // FILE → BUFFER
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // CLOUDINARY UPLOAD
    const cloudinaryResult: any = await new Promise(
        (resolve, reject) => {
            cloudinary.uploader
            .upload_stream(
                {
                    folder: "portfolio-assets",
                    resource_type: "auto",
                },
                (error, result) => {
                    console.log("moment of truth")
                if (error) reject(error)
                
                else resolve(result)
                }
            )
            .end(buffer)
        }
    )

    // SANITY DOCUMENT CREATE
    const project = await client.create({
        _type: "project",

        title,
        description,
        type,

        mediaUrl: cloudinaryResult.secure_url,

        public_id:
        cloudinaryResult.public_id,

        asset_id:cloudinaryResult.asset_id,
    })

    return NextResponse.json({
        success: true,
        project,
    })

    } catch (error) {
        console.log(error)

    return NextResponse.json(
        {
        success: false,
        error: "Upload failed",
        },
    { status: 500 }
    )
}
}*/