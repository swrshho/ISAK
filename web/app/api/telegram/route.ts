import { writeClient } from "@/lib/sanity/clients";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const text = body.message?.text;

        if (!text) {
            return Response.json({ ok: true });
        }
        console.log("STEP 1: creating post in Sanity");

        const result = await writeClient.create({
            _type: "post",
            title: text.substring(0, 25),
            body: text,
            slug: {
                _type: "slug",
                current: text.toLowerCase().replace(/\s+/g, "-"),
            },
            content: [
                {
                    _type: "block",
                    children: [{ _type: "span", text }],
                },
            ],
        });

        console.log("✅ Sanity success:", result);
        return Response.json({ ok: true });
    } catch (err) {
        console.error("❌ Sanity error:", err);
    }
}