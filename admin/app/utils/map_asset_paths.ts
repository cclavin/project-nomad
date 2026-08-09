const MAP_ASSET_PREFIXES = ['/api/maps/', '/pmtiles/', '/basemaps-assets/', '/storage/maps/']

export function isMapAssetPath(pathname: string): boolean {
  return MAP_ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}
