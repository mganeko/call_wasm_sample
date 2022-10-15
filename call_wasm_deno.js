// call_wasm_deno.js
//
// exec with deno
//   $ deno run --allow-read call_wasm_deno.js
//

const content = await Deno.readFile("./func.wasm");

console.warn("-- start loading wasm --")

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


console.warn("--- end ---");

