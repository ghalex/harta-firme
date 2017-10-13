import L from 'leaflet'
import './index.css'

const ACCESS_TOKEN = 'pk.eyJ1IjoiY3JhZHV0b2kiLCJhIjoiY2o3OHM5c3N4MWtvZjMydGMydWhuc25vcyJ9.a3lTu1TlfmFJ8yuW1BfWPw'
const TILE_URL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'

export const createTileLayer = () => {
  const layer = L.tileLayer(TILE_URL, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.',
    maxZoom: 18,
    id: 'mapbox.streets',
    token: ACCESS_TOKEN
  })

  return layer
}

export const createGeoJSONLayer = (data, style = {}, onFeatureClick) => {
  const layer = L.geoJSON(data, {
    style,
    onEachFeature: (feature, layer) => {
      layer.on({ click: () => onFeatureClick(feature) })
    }
  })
  return layer
}

export const createTextLayer = () => {

}

export const createMap = (div) => {
  const map = L.map(div)
  map.setView([ 45.94, 24.96 ], 7)
  return map
}
