import { createMap, createTileLayer, createGeoJSONLayer } from './map'
import { createSidebar } from './sidebar'
import style from './style'
import '../css/leaflet.css'

const map = createMap('harta')
const data = document.judete

map.addLayer(createTileLayer())
map.addLayer(createGeoJSONLayer(data, style))

map.addControl(createSidebar('harta'))
