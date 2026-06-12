import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

    export async function GET() {
    const session: any = await getServerSession()

    if (!session?.accessToken) {
        return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
        )
    }

    const res = await fetch(
        "https://www.googleapis.com/drive/v3/files?pageSize=50&fields=files(id,name,mimeType)",
        {
        headers: {
            Authorization: `Bearer ${session.accessToken}`,
        },
        }
    )

    const data = await res.json()

    return NextResponse.json(data)
}