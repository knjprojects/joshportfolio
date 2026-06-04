
/*import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
        return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");

    const res = await fetch("https://api.github.com/user/repos", {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();
    console.log(data)
    return NextResponse.json(data);
    
}*/
import { NextResponse } from "next/server";

    type Repo = {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
    html_url: string;
    };

    export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");

        if (!authHeader) {
        return NextResponse.json(
            { error: "Missing authorization token" },
            { status: 401 }
        );
        }

        const token = authHeader.replace("Bearer ", "");

        const res = await fetch("https://api.github.com/user/repos", {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
        },
        });

        const data = await res.json();

        // 🔒 GitHub failure guard
        if (!res.ok) {
        return NextResponse.json(
            {
            error: "GitHub API error",
            details: data?.message || "Unknown error",
            },
            { status: res.status }
        );
        }

        // 🔒 Shape validation
        if (!Array.isArray(data)) {
        return NextResponse.json(
            {
            error: "Invalid GitHub response format",
            },
            { status: 500 }
        );
        }

        // 🧼 Normalize data BEFORE sending to frontend
        const repos: Repo[] = data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
        html_url: repo.html_url,
        }));

        return NextResponse.json(repos);
    } catch (err: any) {
        console.error("GitHub sync error:", err);

        return NextResponse.json(
        { error: "Server failure", details: err.message },
        { status: 500 }
        );
    }
}