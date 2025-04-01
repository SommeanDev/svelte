import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BfJ4mJZp.js","_app/immutable/chunks/Sk8rondT.js","_app/immutable/chunks/DlCOA05K.js","_app/immutable/chunks/BUP4Waoj.js","_app/immutable/chunks/DGzMlDlD.js","_app/immutable/chunks/DuHcmTd6.js","_app/immutable/chunks/CX4tAxLR.js","_app/immutable/chunks/BRzKQYUk.js"];
export const stylesheets = ["_app/immutable/assets/2.sTI-GHXi.css"];
export const fonts = [];
