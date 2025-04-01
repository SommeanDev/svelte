import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CvYYAV1r.js","_app/immutable/chunks/Sk8rondT.js","_app/immutable/chunks/DlCOA05K.js","_app/immutable/chunks/CX4tAxLR.js","_app/immutable/chunks/DGzMlDlD.js","_app/immutable/chunks/rVNwLq-7.js","_app/immutable/chunks/DuHcmTd6.js","_app/immutable/chunks/BRzKQYUk.js","_app/immutable/chunks/Dktdgy8O.js","_app/immutable/chunks/AH6wCt5J.js"];
export const stylesheets = ["_app/immutable/assets/4.yeGN9jlM.css"];
export const fonts = [];
