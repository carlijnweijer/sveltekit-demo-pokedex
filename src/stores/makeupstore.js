import { writable } from 'svelte/store';
import { API_URL } from '../api/constants';

export const highestRatedMakeup = writable([]);

const fetchMakeup = async (query, constant) => {
	const res = await fetch(`${API_URL}?${query}`);
	const data = await res.json();

	constant.set(data);
};

fetchMakeup('rating_greater_than=4.9', highestRatedMakeup);
