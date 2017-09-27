import { control } from 'leaflet'
import 'leaflet-sidebar-v2'
import 'leaflet-sidebar-v2/css/leaflet-sidebar.css'

export const createSidebar = (div) => {
  const sidebar = control.sidebar(div, {
    closeButton: true,
    position: 'left'
  })

  const panelContent = {
    id: 'userinfo',
    tab: '<i class="fa fa-gear"></i>',
    pane: '<div>it works</div>',
    position: 'top'
  }

  sidebar.addPanel(panelContent)
  // sidebar.open('userinfo')

  return sidebar
}
