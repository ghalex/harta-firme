import { createMap, createTileLayer, createGeoJSONLayer } from './map'
import { createSidebar } from './sidebar'
import { createLogo } from './logo'
import style from './style'

const map = createMap('harta')
const data = document.judete
const sidebar = createSidebar('sidebar', map)
const logo = createLogo('logo', map)

const tileLayer = createTileLayer()
const geoJSONLayer = createGeoJSONLayer(data, style(), feature => {
  sidebar.open(feature.properties)
})

map.addLayer(tileLayer)
map.addLayer(geoJSONLayer)
map.addControl(sidebar)
map.addControl(logo)

map.fitBounds(geoJSONLayer.getBounds(), {padding: [-100, -100]})
