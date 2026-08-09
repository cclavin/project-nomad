import { defineConfig } from '@adonisjs/cors'
import { isMapAssetPath } from '../app/utils/map_asset_paths.js'

/**
 * Configuration options to tweak the CORS policy. The following
 * options are documented on the official documentation website.
 *
 * https://docs.adonisjs.com/guides/security/cors
 */
const corsConfig = defineConfig({
  enabled: true,
  origin: (_origin, ctx) => isMapAssetPath(ctx.request.url()),
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: ['ETag', 'Content-Range', 'Accept-Ranges', 'Content-Length'],
  credentials: true,
  maxAge: 90,
})

export default corsConfig
