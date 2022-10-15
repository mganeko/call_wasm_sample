zig build-lib \
  -O ReleaseSmall \
  -target wasm32-wasi \
  -dynamic \
  --export=func \
  src/func.zig

