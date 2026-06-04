import { groq } from "next-sanity"
import { client } from "./client"

// ALL projects (projects)
export async function getProjects() {
    return client.fetch(
        groq`*[_type == "project"] | order(_createdAt desc){
            _id,
            title,
            type,
            description,
            "slug": slug.current,
            mediaUrl,
            "thumbnail": thumbnail.asset->url,
            tags,
            createdAt
        }`
    )
}

