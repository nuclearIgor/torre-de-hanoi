const main = document.getElementById('main')
const button = document.getElementById('button')

const criadiv =(elemento, classe, pai, id) => {
    let criaelemento = document.createElement(elemento)
    criaelemento.classList.add(classe)
    criaelemento.id = id

    return pai.appendChild(criaelemento)

}

/* */
criadiv('div', 'box-clicavel', main,'start')
const start = document.getElementById('start')

criadiv('div', 'pilar', start)

criadiv('div', 'disco', start, 'grande')
const discogrande = document.getElementById('grande')

criadiv('div', 'disco', start, 'medio')
const discomedio = document.getElementById('medio')

criadiv('div', 'disco', start, 'pequeno')
const discopequeno = document.getElementById('pequeno')

/* */
criadiv('div', 'box-clicavel', main,'offset')
const offset = document.getElementById('offset')
criadiv('div', 'pilar', offset)

criadiv('div', 'box-clicavel', main,'end')
const end = document.getElementById('end')
criadiv('div', 'pilar', end)

/* */
let count = 0
const header = document.getElementById('header')
criadiv('span', 'hidden', header,'jogadas')
const jogadas = document.getElementById('jogadas')

const mao = document.getElementById('mao')
const headerContainer = document.querySelector('.header-container')

const messageBox = document.getElementById('mensagem-erro')

/**/
let estadomouse = null
const pegadisco = (e) => {
    if(e.currentTarget.childElementCount > 1){
    estadomouse = e.currentTarget.lastElementChild
    mao.innerText =''
    headerContainer.classList.remove('hidden')
    messageBox.innerText =''
    mao.appendChild(estadomouse)
    }
    else{
        messageBox.innerText = 'Você deve selecionar um disco'
    }
}

/**/
const soltadisco = (discoasersolto, destino) => {
    if(destino.childElementCount === 1){

        destino.appendChild(discoasersolto)
        count++
        jogadas.innerText = `Jogadas: ${count}`
        estadomouse = null
        messageBox.innerText =''
    }
    else if(discoasersolto.clientWidth < destino.lastElementChild.clientWidth){
        destino.appendChild(discoasersolto)
        count++
        jogadas.innerText = `Jogadas: ${count}`
        estadomouse = null
        messageBox.innerText =''
    }
    else{
        messageBox.innerText = 'Você só pode soltar este disco sobre um disco menor'
    }
    jogadas.classList.remove('hidden')
    victoria()
}

/* */
const movimentacao = (e) => {

    if(estadomouse === null){
        pegadisco(e)
    }
    else if(estadomouse !== null) {

        let target = e.currentTarget
        soltadisco(estadomouse, target)

    }

    mao.classList.remove('hidden')
    headerContainer.classList.remove('hidden')
    return estadomouse

}

/* */
criadiv('section', 'flex', document.body, 'container')
const container = document.getElementById('container')

criadiv('div','hidden', container, 'resultado')
const resultado = document.getElementById('resultado')

/* */
const victoria = () => {
    let output = false
    if(end.childElementCount === 4) {
        output = true
        resultado.innerText = "YOU WIN!"
        container.classList.remove('hidden')
        resultado.classList.remove('hidden')
    }

}

start.addEventListener('click', movimentacao)

offset.addEventListener('click', movimentacao)

end.addEventListener('click', movimentacao)

/* */
const resetgame = () => {
    start.appendChild(discogrande)
    start.appendChild(discomedio)
    start.appendChild(discopequeno)
    resultado.classList.add('hidden')
    headerContainer.classList.add('hidden')
    jogadas.classList.add('hidden')
    estadomouse = null
    count = 0
    return jogadas.innerText = count
}

button.addEventListener('click', resetgame)

criadiv('footer', 'a', document.body, 'footer')
const footer = document.getElementById('footer')
footer.innerText = "Desenvolvido por Igor & Rodolfo"