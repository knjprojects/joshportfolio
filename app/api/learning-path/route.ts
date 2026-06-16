// app/api/learning-path/route.ts

import { NextResponse } from "next/server";
import { openai } from "@/utils/openai/openai"
export async function POST(req: Request) {
    const { goal } = await req.json();

    const response = await openai.responses.create({
        model: "gpt-5",
        input: `
        Create a learning roadmap for:
        ${goal}

        Return JSON:

        {
            "stages": [
            {
                "title": "",
                "description": "",
                "youtubeSearch": ""
            }
            ]
        }
        `,
    });

    return NextResponse.json({
        result: response.output_text,
    });
}