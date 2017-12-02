import { Control } from 'leaflet'
import $ from 'jquery'
import 'bulma'
import './index.css'

const Logo = Control.extend({
  onAdd: function (map) {
    var element = $('<div><p>Creat de:</p><a href="https://smarters.ro/harta-antreprenoriatului-in-romania/" target="_blank"><img title="Click pentru a vedea mai multe detalii si varianta originala" alt="Harta Antreprenoriatului din Romania" src="https://smarters.ro/wp-content/uploads/2017/11/SMARTERS-Marketing.png" /></a></div>').get(0)
    element.className = 'custom-logo'
    return element
  },

  onRemove: function (map) {
      // Nothing to do here
  },

  bindEvents: function () {
  }

})

export const createLogo = (div, map) => {
  return new Logo({
    position: 'bottomleft'
  })
}
