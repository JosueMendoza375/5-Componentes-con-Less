// Menú hamburguesa del NavBar (pantallas pequeñas)
const burger = document.querySelector<HTMLButtonElement>('.navbar-burger')
const menu = document.querySelector<HTMLElement>('.navbar-menu')

burger?.addEventListener('click', () => {
    const abierto = burger.classList.toggle('is-active')
    burger.setAttribute('aria-expanded', String(abierto))
    menu?.classList.toggle('is-active', abierto)
})
