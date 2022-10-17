// call_wasm_asunc.mjs
//
// exec with node.js
//   $ node call_wasm_asunc.mjs
//
// exec with bun
//   $ bun run call_wasm_asunc.mjs
//  

import fs from "fs";
const content = fs.readFileSync("./func.wasm");


async function callWasm(content) {
  const module = await WebAssembly.compile(content)
  .catch((e) => {
    console.error("ERROR:", e);
  });
  console.warn("-- wasm compiled --");

  const lib = new WebAssembly.Instance(module, {
    env: {},
  }).exports;
  console.warn("-- wasm instance ready. lib:", lib);

  // call func
  console.warn("== Result of wasm func ==");
  const ret = lib.func();
  console.log(ret); // 42
}

console.warn("-- start loading wasm --")
await callWasm(content);

console.warn("--- end ---");

