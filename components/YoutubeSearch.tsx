"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

    export default function YoutubeSearch() {
    const [query, setQuery] = useState("")
    const [videos, setVideos] = useState<any[]>([])

    const searchVideos = async () => {
        const res = await fetch(
        `/api/youtube/search?q=${encodeURIComponent(query)}`
        )

        const data = await res.json()
        console.log(data)
        setVideos(data)
    }

    return (
        <div className="mt-15 p-6">
        <div className="flex gap-2">
            <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search YouTube"
            className="border p-2 rounded w-full text-black"
            />

            <button
            onClick={searchVideos}
            className="bg-red-600 px-4 py-2 rounded text-white"
            >
            Search
            </button>
        </div>
        <p className="text-white text-center rounded-xl bg-gray-600">
                Found {videos.length} videos
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
            {videos.map((video) => (
            <div
                    key={video.id.videoId}
                    
                className="rounded-xl overflow-hidden border"
                >
                    <Link href={`/watch/${video.id.videoId}`}>
  <Image
    src={video.snippet.thumbnails.high.url}
    alt={video.snippet.title}
    width={480}
    height={360}
    unoptimized
    className="
      w-full
      group-hover:scale-110
      transition-all
      duration-500
    "
  />
</Link>
            <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                width={480}
                height={360}
                unoptimized
                className="
                    w-full
                    group-hover:scale-110
                    transition-all
                    duration-500
                "
/>

                <div className="p-3">
                <h2 className="font-semibold">
                    {video.snippet.title}
                </h2>

                <p className="text-sm text-gray-500">
                    {video.snippet.channelTitle}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}