export type Price = { label?: string; amount: number; currency: 'USD' };
export type ModifierOption = { id: string; name: string; priceDelta?: number };
export type Modifier = { id: string; name: string; required?: boolean; max?: number; options: ModifierOption[] };
export type Item = {
  id: string; name: string; description?: string; imageUrl?: string;
  prices: Price[]; modifiers?: Modifier[]; tags?: string[]; isAvailable?: boolean;
};
export type Category = { id: string; name: string; description?: string; items: Item[] };
export type Menu = {
  id: string; name: string; currency: 'USD'; lastPublishedAt?: string;
  location?: { id: string; name: string; address?: string; phone?: string; hours?: Record<string,string> };
  categories: Category[];
};
