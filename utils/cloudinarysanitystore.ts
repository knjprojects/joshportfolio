import { uploadToCloudinary } from "@/utils/cloudinary/cloudinary"
import { createProject } from "@/utils/sanity/createProject"

export type meta = {
  title: string
  type: string
  description: string
  
}
import { CloudinaryResult } from "@/typings"

export async function handleUpload(file: File, meta: meta) {
  // 1. Upload file to Cloudinary
    const cloudinaryResult: any = await uploadToCloudinary(file)

    // 2. Extract URL
    const mediaUrl = cloudinaryResult.secure_url
    const public_id = cloudinaryResult.public_id
    const asset_id=cloudinaryResult.asset_id
    // 3. Save metadata in Sanity
    const project = await createProject({
        title: meta.title,
        description: meta.description,
        type: meta.type,
        mediaUrl:mediaUrl,
        public_id:public_id,
        asset_id
    })
    return project
}
    