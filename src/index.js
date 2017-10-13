import { createMap, createTileLayer, createGeoJSONLayer } from './map'
import { createSidebar } from './sidebar'
import style from './style'

const map = createMap('harta')
const data = document.judete
const sidebar = createSidebar('sidebar', map)

const onClick = feature => {
  sidebar.open(feature.properties)
}

map.addLayer(createTileLayer())
map.addLayer(createGeoJSONLayer(data, style(), onClick))
map.addControl(sidebar)
