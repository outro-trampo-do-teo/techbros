//Animação da scrollbar.

var progress = document.getElementById('progressbar')


window.addEventListener('scroll', scrollProgress)

function scrollProgress () {
    //Descobre o tamanho total da página do usuário.
    var totalHeight = document.body.scrollHeight - window.innerHeight

    //Tamanho que a progressbar terá.
    let progressHeight = (window.pageYOffset / totalHeight) *100
    progress.style.height = progressHeight + "%"
}