import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        const { fileId, accessToken } = await req.json();

        const res = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}`,
        {
            method: "DELETE",
            headers: {
            Authorization: `Bearer ${accessToken}`,
            },
        }
        );

        if (!res.ok) {
        return NextResponse.json(
            { error: "Failed to delete file" },
            { status: 500 }
        );
        }

        return NextResponse.json({
        success: true,
        });
    } catch {
        return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
        );
    }
}