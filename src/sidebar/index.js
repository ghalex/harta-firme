import { Control, DomUtil, DomEvent } from 'leaflet'
import mustache from 'mustache'
import './index.css'

const template = `
  <div>
    <div class='delete'></div>
    <h1>{{name}}</h1>
    <h4>
      Număr total de firme: <strong>{{numar_firme}}</strong>
    </h4>

    <h4>
      Top 3 cele mai mai populare domenii de activitate:
    </h4>
    <ul>
    {{#top_domenii}}
      <li>{{name}} <br /><u>cifra afaceri:</u> <strong>{{formatCa}}</strong></li>
    {{/top_domenii}}
    </ul>

    <h4>
      Top 3 firme după cifra de afaceri:
    </h4>
    <ul>
    {{#top_firme_ca}}
      <li><b>{{name}}</b> <br /><u>cifra afaceri:</u> <strong>{{formatCa}}</strong></li>
    {{/top_firme_ca}}
    </ul>

  </div>
`

const Sidebar = Control.extend({
  onAdd: function (map) {
    var element = DomUtil.create('div')
    element.className = 'custom-sidebar'
    element.style.height = map.getSize().y - 35
    DomEvent.on(element, 'click', (e) => {
      e.stopImmediatePropagation()
      e.stopPropagation()
      this.close()
    })
    return element
  },

  onRemove: function (map) {
      // Nothing to do here
  },

  open: function (data) {
    const container = this.getContainer()
    const templateData = Object.assign(data, {
      'top_domenii': data['top_domenii'].slice(0, 3),
      'top_firme_ca': data['top_firme_ca'].slice(0, 3),
      formatCa: function () {
        return Number(this.ca).toLocaleString()
      }
    })

    console.log(templateData)
    container.innerHTML = mustache.render(template, templateData)
    DomUtil.addClass(container, 'is-open')
  },

  close: function () {
    const container = this.getContainer()
    DomUtil.removeClass(container, 'is-open')
  }
})

export const createSidebar = (div, map) => {
  return new Sidebar({
    position: 'topright'
  })
}
