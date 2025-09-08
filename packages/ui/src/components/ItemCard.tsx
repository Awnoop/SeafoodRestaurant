import React from "react";
import type { Item } from "@seafood/types";
import { money } from "@seafood/lib/currency";

export function ItemCard({ item }: { item: Item }) {
  const from = item.prices?.[0]?.amount ?? 0;
  return (
    <div className="rounded-2xl border p-4 flex items-start gap-3">
      {item.imageUrl && <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-xl" loading="lazy" />}
      <div className="flex-1">
        <div className="flex justify-between gap-2">
          <h3 className="font-medium">{item.name}</h3>
          <span className="text-sm">{money(from)}</span>
        </div>
        {item.description && <p className="text-sm opacity-80">{item.description}</p>}
      </div>
    </div>
  );
}
