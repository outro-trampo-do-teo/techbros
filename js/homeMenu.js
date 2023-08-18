const $menuAbrir = document.getElementById('menuAbrir')

count = 1

$menuAbrir.addEventListener('click', () => {
    count++
    if (count % 2 == 0) {
        document.getElementById('info_nav_menu').style.display = "flex"
    } else {
        document.getElementById('info_nav_menu').style.display = "none"
    }
})
