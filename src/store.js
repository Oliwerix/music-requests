import { writable } from "svelte/store";
import websocketStore from 'svelte-websocket-store';


// Change here for ws server URL
export const komadi = websocketStore('wss://'+location.hostname+'/socket', [])

export let admin = writable(false);
export let sort = writable(false);
