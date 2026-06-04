//same as firestore user data
//import {  DateTimeInputProp } from "next-sanity"

export type Project = {
    _id: string//sanity ahas an _id fied itsef s we check fr it here as we
    title: string
    slug:string
    type:string
    description:string
    mediaUrl: string
    asset_id: string
    public_id:string
    thumbnail: string
    tags:string[]
    createdAt:string
}

export type CloudinaryResult = {

    asset_id:string,
    public_id: "portfolio-assets/dragon-model",
    version: number

    secure_url: string

    format: string//png
    resource_type: string//image

    width: number
    height: number

    bytes: number

    created_at: string

    original_filename: string

}