import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    console.log("Telegram update:", body);

    return Response.json({ ok: true });
}