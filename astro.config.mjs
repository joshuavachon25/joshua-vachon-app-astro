// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

export default /** @type {import('astro').AstroUserConfig} */ ({
  devOptions: {
    hostname: '10.0.0.62',
    port: 8000
  },
  renderers: [ '@astrojs/renderer-vue']
});
