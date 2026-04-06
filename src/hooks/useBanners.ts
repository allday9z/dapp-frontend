import { useState, useEffect } from 'react';
import type { BannerSlide } from '../types';
import { fetchHomeBanners } from '../api/banners';

export function useHomeBanners() {
  const [banners, setBanners] = useState<BannerSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchHomeBanners()
      .then((data) => {
        if (!cancelled) {
          setBanners(data);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { banners, loading, error };
}
