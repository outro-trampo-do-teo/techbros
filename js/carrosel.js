var $carrosel = document.getElementById('carrosel')
var $carroselImg = document.getElementById('carrosel_img')
var $left = document.getElementById('left')
var $right = document.getElementById('right')

var count = 1

$left.addEventListener('click', recuar)
$right.addEventListener('click', avancar)

function recuar () {
    if (count == 0) {
        count = 3
    }
    $carroselImg.src = `image/image${count}.png`
    count--
}

function avancar () {
    $carroselImg.src = `image/image${count}.png`
    count++
    if (count == 4) {
        count = 1
    }
}

setInterval(() => {
    $carroselImg.src = `image/image${count}.png`
    count++
    if (count == 4) {
        count = 1
    }
}, 5000);