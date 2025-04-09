import { defineConfig } from 'tsup'

export default defineConfig({
  tsconfig: 'tsconfig.build.json',
  entry: ['src/index.ts'],
  format: ['esm'],
  splitting: false,
  dts: true,
  sourcemap: true,
  clean: true
})
