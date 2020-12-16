const main = document.getElementById('main')
const button = document.getElementById('button')

const criadiv =(elemento, classe, pai, id) => {
    let criaelemento = document.createElement(elemento)
    criaelemento.classList.add(classe)
    criaelemento.id = id

    return pai.appendChild(criaelemento)

}

criadiv('div', 'box-clicavel', main,'start')
const start = document.getElementById('start')

criadiv('div', 'pilar', start)
criadiv('div', 'disco', start, 'maior')
criadiv('div', 'disco', start, 'medio')
criadiv('div', 'disco', start, 'pequeno')

const discopequeno = document.getElementById('pequeno')
const discomedio = document.getElementById('medio')
const discogrande = document.getElementById('maior')




criadiv('div', 'box-clicavel', main,'offset')
const offset = document.getElementById('offset')
criadiv('div', 'pilar', offset)

criadiv('div', 'box-clicavel', main,'end')
const end = document.getElementById('end')
criadiv('div', 'pilar', end)

// const maior = document.getElementById('maior').clientWidth
// const medio = document.getElementById('medio').clientWidth
const pequeno = document.getElementById('pequeno')

// let contador = [];
// let maxTamanho = 0;
//     for (let i = 1; i < contador.length; i++){
//         if (contador[i] >= maxTamanho) {
//             maxTamanho = contador[i];
//         }
//     }


let count = 0
const header = document.getElementById('header')
criadiv('span', 'hidden', header,'jogadas')
const jogadas = document.getElementById('jogadas')

const mao = document.getElementById('mao')

const pegadisco = (e) => {
    if(e.currentTarget.childElementCount > 1){
    estadomouse = e.currentTarget.lastElementChild}
    mao.innerText =''
    mao.appendChild(estadomouse)
}

const soltadisco = (discoasersolto, destino) => {
    if(destino.childElementCount === 1){

        destino.appendChild(discoasersolto)
        count++
        jogadas.innerText = `Jogadas: ${count}`
        estadomouse = null
    }
    if(discoasersolto.clientWidth < destino.lastElementChild.clientWidth){
        console.log(discoasersolto.clientWidth)
        destino.appendChild(discoasersolto)
        count++
        jogadas.innerText = `Jogadas: ${count}`
        estadomouse = null
    }
    else{console.log('erro')}
    jogadas.classList.remove('hidden')
    victoria()
}

let estadomouse = null

const movimentacao = (e) => {

    if(estadomouse === null){
        pegadisco(e)
        console.log('1')
    }
    else if(estadomouse !== null){

        let target = e.currentTarget
        console.log(2)

        soltadisco(estadomouse, target)
        
    }
    mao.classList.remove('hidden')
    console.log(estadomouse)
    return estadomouse

}

criadiv('section', 'flex', document.body, 'container')
const container = document.getElementById('container')

criadiv('div','hidden', container, 'resultado')
const resultado = document.getElementById('resultado')

const victoria = () => {
    let output = false
    if(end.childElementCount === 4) {
        output = true
        resultado.innerText = "YOU WIN!"
        container.classList.remove('hidden')
        resultado.classList.remove('hidden')
        button.classList.remove('hidden')
    }

    console.log(output)
}


start.addEventListener('click', movimentacao)

offset.addEventListener('click', movimentacao)

end.addEventListener('click', movimentacao)

//

// let divs = document.querySelectorAll('.div')
// console.log(divs)

// for(let i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click', funcao)
// }

const resetgame =()=>{
    start.appendChild(discogrande)
    start.appendChild(discomedio)
    start.appendChild(discopequeno)
    container.classList.add('hidden')
    count = 0
    return jogadas.innerText = count
}

button.addEventListener('click', resetgame)