const getColor = (d) => {
  return d > 20000 ? '#800026'
    : d > 15000 ? '#BD0026'
      : d > 12500 ? '#E31A1C'
        : d > 10000 ? '#FC4E2A'
          : d > 7500 ? '#FD8D3C'
            : d > 5000 ? '#FEB24C'
              : d > 2500 ? '#FED976'
                : '#FFEDA0'
}

export default (options) => {
  return feature => {
    return {
      fillColor: getColor(feature.properties.numar_firme),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1
    }
  }
}
