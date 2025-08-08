import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    if (!data?.email || !data?.message) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
    }
    // In production, send email or store message here.
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }
}
