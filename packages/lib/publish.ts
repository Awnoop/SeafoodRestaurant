import { supabase } from "./supabase";
import type { Menu } from "@seafood/types";

export async function publishMenu(locId: string, menu: Menu) {
  // 1) Upload JSON snapshot to CDN (Supabase Storage public bucket: "public")
  const path = `menus/${locId}/menu.json`;
  const blob = new Blob([JSON.stringify(menu, null, 2)], { type: "application/json" });

  const { error: upErr } = await supabase.storage.from("public").upload(path, blob, { upsert: true });
  if (upErr) throw upErr;

  // 2) Tell Next.js to revalidate this location
  const tag = `menu:${locId}`;
  const url = `${process.env.VITE_WEB_BASE}/api/revalidate?secret=${process.env.VITE_REVAL_SECRET}&tag=${encodeURIComponent(tag)}`;
  await fetch(url).then(()=>{}).catch(()=>{});
}
