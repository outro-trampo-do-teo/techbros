var progress = document.getElementById('progressbar')
var totalHeight = document.body.scrollHeight - window.innerHeight

window.addEventListener('scroll', scrollProgress)

function scrollProgress () {
    let progressHeight = (window.pageYOffset / totalHeight) *100
    progress.style.height = progressHeight + "%"
}