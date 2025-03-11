import { useState, useEffect } from 'react';
import axios from 'axios';

const cache = new Map<string, { data: unknown; expiry: number }>();

interface FetchOptions {
	cacheKey?: string;
	cacheTtl?: number;
	skip?: boolean;
}

export const cacheForget = (cacheKey: string) => {
	cache.delete(cacheKey);
};

const useFetch = <T>(url: string | null, options?: FetchOptions) => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const cacheKey = options?.cacheKey ?? url;
	const cacheTtl = options?.cacheTtl ?? 1000 * 60 * 1;
	const skip = options?.skip ?? false;

	useEffect(() => {
		if (!url || !cacheKey || skip) return;

		const cached = cache.get(cacheKey);
		if (cached && Date.now() < cached.expiry) {
			setData(cached.data as T);
			return;
		}

		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get<T>(url);
				cache.set(cacheKey, {
					data: response.data,
					expiry: Date.now() + cacheTtl,
				});
				setData(response.data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url, cacheKey, cacheTtl, skip]);

	return { data, error, isLoading };
};

export default useFetch;
