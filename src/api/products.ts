import type { Product } from '../types';
import macbookAirData from '../data/products/macbook-air.json';
import whatsNewData from '../data/products/whats-new.json';

const DATA_MAP: Record<string, unknown[]> = {
  'macbook-air': macbookAirData,
  'whats-new': whatsNewData,
};

/** Fetch products by category. Swap implementation for real API later. */
export async function fetchProducts(category: string): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 80)); // simulate latency
  const data = DATA_MAP[category];
  if (!data) throw new Error(`No products found for category: ${category}`);
  return data as Product[];
}
