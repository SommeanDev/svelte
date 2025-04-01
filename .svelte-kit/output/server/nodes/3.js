import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.CLg2OgRl.js","_app/immutable/chunks/Bb27wRaQ.js","_app/immutable/chunks/DlCOA05K.js","_app/immutable/chunks/Sk8rondT.js","_app/immutable/chunks/BUP4Waoj.js","_app/immutable/chunks/DGzMlDlD.js"];
export const stylesheets = [];
export const fonts = [];
