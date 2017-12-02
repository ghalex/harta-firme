const getColor = (d) => {
  return d > 55000 ? '#ff2d00'
    : d > 20000 ? '#ff8b00'
      : d > 10000 ? '#ffce00'
        : d > 8000 ? '#03756f'
          : '#00c8b6'
}

export default (options) => {
  return feature => {
    return {
      fillColor: getColor(feature.properties.numar_firme),
      weight: 2,
      opacity: 1,
      color: 'rgba(255, 255, 255, 0.6)',
      dashArray: '3',
      fillOpacity: 1
    }
  }
}
