import React from "react";
import type { Category } from "@seafood/types";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((c) => (
        <a key={c.id} href={`#${c.name.toLowerCase().replace(/\s+/g, "-")}`}
           className="rounded-2xl border p-4 hover:shadow">
          <h2 className="text-xl font-semibold">{c.name}</h2>
          {c.description && <p className="text-sm opacity-80">{c.description}</p>}
        </a>
      ))}
    </div>
  );
}
