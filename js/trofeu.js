var $patrocinadores = document.getElementById('patrocinadores')
var $patrocinador = document.querySelectorAll('div.patrocinador')

//Transforma $patrocinador de nodeList para array
var list = Array.from($patrocinador)

list.forEach (div => {
    //Troféus automáticos

    if (div.classList.contains('platina')) {
        //Troféu Platina
        let trofeu = document.createElement('img')
        trofeu.setAttribute('src', '../image/svg/trofeu_platina.svg')
        trofeu.style.width = '90px'

        div.appendChild(trofeu)
    } else if (div.classList.contains('ouro')){
        //Troféu Ouro
        let trofeu = document.createElement('img')
        trofeu.setAttribute('src', '../image/svg/trofeu_ouro.svg')
        trofeu.style.width = '90px'

        div.appendChild(trofeu)
    } else if (div.classList.contains('prata')){
        //Troféu Prata
        let trofeu = document.createElement('img')
        trofeu.setAttribute('src', '../image/svg/trofeu_prata.svg')
        trofeu.style.width = '90px'

        div.appendChild(trofeu)
    } else if (div.classList.contains('bronze')){
        //Troféu Bronze
        let trofeu = document.createElement('img')
        trofeu.setAttribute('src', '../image/svg/trofeu_bronze.svg')
        trofeu.style.width = '90px'

        div.appendChild(trofeu)
    } else {}
})

