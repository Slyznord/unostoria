export function initDropdownEvents () {
  const dropdowns = Array.from(document.querySelectorAll('.ui-dropdown')) || []

  if (!dropdowns.length) return

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', ({ target }) => toggleDropdown(target))

    const options = Array.from(dropdown.querySelectorAll('.ui-dropdown-option')) || []

    if (!options.length) return

    options.forEach(option => {
      option.addEventListener('click', ({ target }) => selectOption(target))
    })

    dropdown.querySelector('.ui-dropdown-reset').addEventListener('click', resetDropdown)
  })
}

export function initOutClickEvent ({ target }) {
  if (target.closest('.ui-dropdown')) return

  const activeDropdowns = Array.from(document.querySelectorAll('[aria-expanded="true"]')) || []

  if (!activeDropdowns.length) return

  activeDropdowns.forEach(dropdown => {
    dropdown.querySelector('.ui-dropdown-panel').classList.remove('ui-dropdown-panel-active')
    dropdown.setAttribute('aria-expanded', 'false')
  })
}

function toggleDropdown (element) {
  const activeDropdowns = Array.from(document.querySelectorAll('[aria-expanded="true"]')) || []
  const parent = element.closest('.ui-dropdown')
  const panel = parent.querySelector('.ui-dropdown-panel')

  if (activeDropdowns.length) {
    activeDropdowns.forEach(dropdown => {
      if (dropdown === parent) return

      dropdown.querySelector('.ui-dropdown-panel').classList.remove('ui-dropdown-panel-active')
      dropdown.setAttribute('aria-expanded', 'false')
    })
  }

  panel.classList.toggle('ui-dropdown-panel-active')
  parent.setAttribute('aria-expanded', panel.classList.contains('ui-dropdown-panel-active'))
}

function selectOption (element) {
  const parent = element.closest('.ui-dropdown')
  const value = element.getAttribute('data-value')

  const select = parent.querySelector('[data-element="selected-value"]')

  select.setAttribute('data-value', value)
  select.innerText = value

  const selectedValues = Array.from(parent.querySelectorAll('[aria-selected="true"]')) || []

  selectedValues.forEach(item => {
    item.setAttribute('aria-selected', 'false')
  })
  element.setAttribute('aria-selected', 'true')
  element.closest('.ui-dropdown').setAttribute('aria-selected', 'true')
}

function resetDropdown ({ target }) {
  const parent = target.closest('.ui-dropdown')
  parent.setAttribute('aria-selected', false)

  const option = parent.querySelector('.ui-dropdown-option[aria-selected="true"]')
  option.setAttribute('aria-selected', 'false')

  const value = parent.querySelector('[data-element="selected-value"]')
  value.innerText = value.getAttribute('data-placeholder')
}
