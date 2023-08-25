var $fecharMenu = document.getElementById('fechar_topicos_btn')

$fecharMenu.addEventListener('click', fecharMenu)

function fecharMenu () {
    var $menuTopico = document.getElementById('menu_topicos')

    $menuTopico.style.display = "none"
}