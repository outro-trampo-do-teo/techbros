const $menuAbrir = document.getElementById('menuAbrir')
const $menuFechar = document.getElementById('menuFechar')

$menuAbrir.addEventListener('click', abrirMenu)
$menuFechar.addEventListener('click', fecharMenu)

function abrirMenu () {
    $menuAbrir.style.display = "none"
    document.getElementById('info_nav_menu').style.display = "flex"
}


function fecharMenu () {
    $menuAbrir.style.display = "block"
    document.getElementById('info_nav_menu').style.display = "none"
}
