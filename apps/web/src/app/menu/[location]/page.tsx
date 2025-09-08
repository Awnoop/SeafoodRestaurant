import { CategoryGrid } from "@seafood/ui";
import type { Menu } from "@seafood/types";
import { Metadata } from "next";
// import { unstable_cache, revalidateTag } from "next/cache";

const getMenu = async (location: string): Promise<Menu> => {
  const res = await fetch(`${process.env.CDN_BASE}/menus/${location}/menu.json`, {
    next: { tags: [`menu:${location}`], revalidate: 3600 }
  });
  if (!res.ok) throw new Error("Menu not found");
  return res.json();
};

// SEO
export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const menu = await getMenu(params.location);
  const title = `${menu.name} • ${menu.location?.name ?? "Menu"}`;
  const description = `Fresh seafood • ${menu.location?.address ?? ""}`;
  const url = `${process.env.NEXT_PUBLIC_WEB_URL}/menu/${params.location}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url }
  };
}

export default async function MenuPage({ params }: { params: { location: string } }) {
  const menu = await getMenu(params.location);
  return (
    <main className="mx-auto max-w-5xl p-4">
      <h1 className="text-3xl font-bold mb-4">{menu.name}</h1>
      <CategoryGrid categories={menu.categories} />
      {/* reuse ItemCard in your category sections */}
    </main>
  );
}
