import { writable } from 'svelte/store';

export const activeRoute = writable('/'); // default route

export function setActiveRoute(route) {
    activeRoute.set(route);
}
