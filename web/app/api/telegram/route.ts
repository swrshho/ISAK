import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@sanity/client";

// const sanity = createClient({
//     projectId: process.env.SANITY_PROJECT_ID!,
//     dataset: process.env.SANITY_DATASET!,
//     apiVersion: "2025-01-01",
//     token: process.env.SANITY_API_TOKEN!,
//     useCdn: false,
// });

export async function POST(req: NextRequest) {
    const update = await req.json();

    console.log(
        "Telegram update:",
        JSON.stringify(update, null, 2)
    );

    return NextResponse.json({ ok: true });
}