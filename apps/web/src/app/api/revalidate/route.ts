import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const tag = searchParams.get("tag");
  if (secret !== process.env.REVAL_SECRET || !tag) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  revalidateTag(tag);
  return NextResponse.json({ ok: true, tag });
}
