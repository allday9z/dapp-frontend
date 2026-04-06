import type { BannerSlide } from '../types';
import homeBannersData from '../data/banners/home.json';

export async function fetchHomeBanners(): Promise<BannerSlide[]> {
  await new Promise((r) => setTimeout(r, 50));
  return homeBannersData as BannerSlide[];
}
