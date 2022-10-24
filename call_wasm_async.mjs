// call_wasm_async.mjs
//
// exec with node.js
//   $ node call_wasm_async.mjs
//
// exec with bun
//   $ bun run call_wasm_async.mjs
//  

import fs from "fs";
const content = fs.readFileSync("./func.wasm");

console.warn("-- start compiling wasm --")

const module = await WebAssembly.compile(content)
.catch((e) => {
  console.error("ERROR:", e);
});
console.warn("-- wasm compiled --");

const lib = new WebAssembly.Instance(module, {
  env: {},
}).exports;
console.warn("-- wasm instance ready. lib:", lib);

// --- call func ---
console.warn("== Result of wasm func ==");
const ret = lib.func();
console.log(ret); // 42


console.warn("--- end ---");

