// mobile nav
const menu_button = document.getElementById('menu-button')
const mobile_menu = document.getElementById('mobile-menu')

menu_button.onclick = () => {
    if(mobile_menu.style.display === 'none') {
        mobile_menu.style.display = 'block'
    }else {
        mobile_menu.style.display = 'none'
    }
}
    