import leaflet from 'leaflet'

const ACCESS_TOKEN = 'pk.eyJ1IjoiY3JhZHV0b2kiLCJhIjoiY2o3OHM5c3N4MWtvZjMydGMydWhuc25vcyJ9.a3lTu1TlfmFJ8yuW1BfWPw'
const TILE_URL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'

export const createTileLayer = () => {
  const layer = leaflet.tileLayer(TILE_URL, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.',
    maxZoom: 18,
    id: 'mapbox.streets',
    token: ACCESS_TOKEN
  })

  return layer
}

export const createGeoJSONLayer = (data, style = {}) => {
  const layer = leaflet.geoJSON(data, { style })
  return layer
}

export const createMap = (div) => {
  const map = leaflet.map(div).setView([ 45.94, 24.96 ], 7)
  return map
}
