import { Control } from 'leaflet'
import mustache from 'mustache'
import $ from 'jquery'
import 'bulma'
import './index.css'

const template2 = `
  <nav class="panel">
    <a class='delete'></a>
    <p class="panel-heading">
      {{name}} <small>({{formatNumarFirme}} firme)</small> dintre care <small>({{formatSrld}} SRL-D)</small>
    </p>
    <p class="panel-tabs">
      <a class="is-active">Top Firme</a>
      <a>Top Angajatori</a>
      <a>Top domenii</a>
    </p>
    <div class='tab tab-0 is-active'>
      <div class="panel-block">
        <h4 class='title is-6'>
          Top 3 firme după cifra de afaceri:
        </h4>
      </div>
      <div class='panel-block content'>
        <ul>
        {{#top_firme_ca}}
          <li>
            {{name}} <br /><u>Cifra de afaceri:</u> <strong>{{formatCa}} milioane RON</strong></li>
        {{/top_firme_ca}}
        </ul>
      </div>
    </div>
    <div class='tab tab-1'>
      <div class="panel-block">
        <h4 class='title is-6'>
          Top firme după angajati:
        </h4>
      </div>
      <div class='panel-block content'>
        <ul>
        {{#top_firme_angajati}}
          <li>
            {{name}} <br /><u>Numar de angajati:</u> <strong>{{formatAngajati}}</strong></li>
        {{/top_firme_angajati}}
        </ul>
      </div>
    </div>
    <div class='tab tab-2'>
      <div class="panel-block">
        <h4 class='title is-6'>
          Top 3 cele mai mai populare domenii de activitate:
        </h4>
      </div>
      <div class='panel-block content'>
        <div>
          <ul>
          {{#top_domenii}}
            <li>
              {{name}} <br /><u>Cifra de afaceri:</u> <strong>{{formatCa}} milioane RON</strong></li>
          {{/top_domenii}}
          </ul>
        </div>
      </div>
    </div>
  </nav>
`

const Sidebar = Control.extend({
  onAdd: function (map) {
    var element = $('<div />').get(0)
    element.className = 'custom-sidebar'
    element.style.width = map.getSize().x - 80
    // element.style.height = map.getSize().y - 35
    return element
  },

  onRemove: function (map) {
      // Nothing to do here
  },

  bindEvents: function () {
    const container = this.getContainer()
    $(container).find('.delete').click((e) => {
      e.stopPropagation()
      this.close()
    })

    $(container).find('.panel-tabs a').click((e) => {
      const index = $(e.target).index()

      $(container).find(`.panel .panel-tabs a`).removeClass('is-active')
      $(container).find(`.panel .panel-tabs`).children().eq(index).addClass('is-active')
      $(container).find(`.panel .tab`).removeClass('is-active')
      $(container).find(`.panel .tab-${index}`).addClass('is-active')
    })
  },

  open: function (data) {
    const container = this.getContainer()
    const templateData = Object.assign(data, {
      'top_domenii': data['top_domenii'].slice(0, 5),
      'top_firme_ca': data['top_firme_ca'].slice(0, 5),
      formatNumarFirme: function () {
        return this.numar_firme.toLocaleString('ro-RO')
      },
      formatSrld: function () {
        return this.numr_srl_d_uri.toLocaleString('ro-RO')
      },
      formatCa: function () {
        return this.ca.toLocaleString('ro-RO')
      },
      formatAngajati: function () {
        return this.angajati.toLocaleString('ro-RO')
      }
    })

    container.innerHTML = mustache.render(template2, templateData)
    $(container).addClass('is-open')
    this.bindEvents()
  },

  close: function () {
    const container = this.getContainer()
    $(container).removeClass('is-open')
  }
})

export const createSidebar = (div, map) => {
  return new Sidebar({
    position: 'topright'
  })
}
