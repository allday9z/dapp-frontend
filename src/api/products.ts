import type { Product } from '../types';
import macbookData from '../data/products/macbook.json';
import whatsNewData from '../data/products/whats-new.json';

const DATA_MAP: Record<string, unknown[]> = {
  'macbook-air': (macbookData as any[]).filter(p => p.name.toLowerCase().includes('air')),
  'macbook-pro': (macbookData as any[]).filter(p => p.name.toLowerCase().includes('pro') && !p.name.toLowerCase().includes('air')),
  'whats-new': whatsNewData,
};

/** Fetch products by category. Swap implementation for real API later. */
export async function fetchProducts(category: string): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 80)); // simulate latency
  const data = DATA_MAP[category];
  if (!data) throw new Error(`No products found for category: ${category}`);
  return data as Product[];
}
