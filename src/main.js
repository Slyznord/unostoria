import './styles/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const mobile_menu_burger = document.querySelector('[data-element="mobile-burger"]')
  const mobile_menu_panel = document.querySelector('[data-element="mobile-menu-panel"]')

  if (!mobile_menu_burger) return

  mobile_menu_burger.addEventListener('click', () => {
    const aria_expanded = mobile_menu_panel.getAttribute('aria-expanded')
    mobile_menu_panel.setAttribute('aria-expanded', aria_expanded !== 'true')
  })
})