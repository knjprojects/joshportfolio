import { NextResponse } from "next/server"

    export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const q = searchParams.get("q")

    if (!q) {
        return NextResponse.json([])
    }

    const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(
        q
        )}&key=AIzaSyCkGrSGNEqFXzFzpRpa07GTcKly151ojLE`
    )

    const data = await res.json()

    console.log("YOUTUBE RESPONSE:", data)

    return NextResponse.json(data.items || [])
}

//turn ff appicatin restrictins in yutubeapi t get data back : https://console.cloud.google.com/apis/credentials/key/3df9b789-7c7c-474c-a724-47f2a53aae87?project=joshthedevportfoliofinal