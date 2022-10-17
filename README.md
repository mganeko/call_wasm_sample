# call_wasm_sample

This is a example for calling WebAssembly function from Node.js / Bun.

## Usage


### exec with Bun

#### (1) Simple

```
bun run call_wasm.js
```

--> With bun 0.1.13, result is unstable. No result sometimes.

- related issue
  - Bun not waiting for callback in some cases [#1189](https://github.com/oven-sh/bun/issues/1189)


#### (2) With timeout

```
bun run call_wasm_timeout.js
```

== Result of wasm func ==

42

#### (3) With async/await

```
bun run call_wasm_async.mjs
```

== Result of wasm func ==

42


### exec with Node.js

#### (1) Simple

```
node call_wasm.js
```

== Result of wasm func ==

42

#### (2) With timeout

```
node call_wasm_timeout.js
```

== Result of wasm func ==

42

#### (3) With async/await

```
node call_wasm_async.mjs
```

== Result of wasm func ==

42

## exec with Deno

```
deno run --allow-read call_wasm_deno.js
```

== Result of wasm func ==

42

## To build wasm module

- [Zig](https://ziglang.org/) is required to build wasm module.

```
sh buld_func.sh
```

--> func.wasm

## LICENSE

MIT