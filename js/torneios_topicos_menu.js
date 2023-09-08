var $fecharMenu = document.getElementById('fechar_topicos_btn')


$fecharMenu.addEventListener('click', fecharMenu)

function fecharMenu () {


    var $menuTopico = document.getElementById('menu_topicos')

    if ($menuTopico.style.display != "none" ) {
        $fecharMenu.innerHTML = ">"
        $fecharMenu.style.left = "0"
        $menuTopico.style.display = "none"
    } else {
        $fecharMenu.innerHTML = "<"
        $menuTopico.style.display = "block"
        if (window.screen.width <= "768px") {
            $fecharMenu.style.left = "12%"
        } else {
            $fecharMenu.style.left = "13.5%"

        }
    }
}