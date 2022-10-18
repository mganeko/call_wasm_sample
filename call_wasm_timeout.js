// call_wasm_timeout.js
//
// exec with node.js
//   $ node call_wasm_timeout.js
//
// exec with bun
//   $ bun run call_wasm_timeout.js
//  

const fs = require("fs");
const content = fs.readFileSync("./func.wasm");

console.warn("-- start compiling wasm --")

WebAssembly.compile(content)
  .then((module) => {
    console.warn("-- wasm compiled --");
    const lib = new WebAssembly.Instance(module, {
      env: {},
    }).exports;
    console.warn("-- wasm instance ready. lib:", lib);

    // call func
    console.warn("== Result of wasm func ==");
    const ret = lib.func();
    console.log(ret); // 42
  })
  .catch((e) => {
    console.error("ERROR:", e);
  });


setTimeout(function() {
  console.warn("timeout ..");
}, 100);


console.warn("--- end ---");

