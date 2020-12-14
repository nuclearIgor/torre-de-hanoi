const main = document.getElementById('main')
const button = document.getElementById('button')

const criadiv =(elemento, classe, pai, id)=>{
    let criaelemento = document.createElement(elemento)
    criaelemento.classList.add(classe)
    criaelemento.id = id
    
    return pai.appendChild(criaelemento)

}

criadiv('div', 'div', main,'start')
const start = document.getElementById('start')

criadiv('div', 'pilar', start)
criadiv('div', 'disco', start, 'maior')
criadiv('div', 'disco', start, 'medio')
criadiv('div', 'disco', start, 'pequeno')


criadiv('div', 'div', main,'offset')
const offset = document.getElementById('offset')
criadiv('div', 'pilar', offset)

criadiv('div', 'div', main,'end')
const end = document.getElementById('end')
criadiv('div', 'pilar', end)

// const maior = document.getElementById('maior').clientWidth
// const medio = document.getElementById('medio').clientWidth
// const pequeno = document.getElementById('pequeno').clientWidth


let count = 0
const header = document.getElementById('header')


const pegadisco = (e)=>{
    if(e.target.childElementCount > 1){
    estadomouse = e.target.lastElementChild}
}

const soltadisco = (discoasersolto, destino)=>{
    if(destino.childElementCount === 1){

        destino.appendChild(discoasersolto)
        count++
        header.innerText += count
    }
    if(discoasersolto.clientWidth < destino.lastElementChild.clientWidth){
        console.log(discoasersolto.clientWidth)
        destino.appendChild(discoasersolto)
        count++
        header.innerText += count
    }
    else{console.log('erro')}
    victoria()
}

let estadomouse = null

const movimentacao = (e) => {
    // console.log(e.target.lastElementChild)

    if(estadomouse === null){
        pegadisco(e)
        console.log('1')
    }
    else if(estadomouse !== null){

        let target = e.target
        console.log(2)

        soltadisco(estadomouse, target)
        estadomouse = null
    }
    console.log(estadomouse)
    return estadomouse

}

//elemento, classe, pai, id
criadiv('section', 'flex', document.body, 'container')
const container = document.getElementById('container')

criadiv('div','hidden', container, 'resultado')


const victoria = () => {
    let output = false
    //verificar quantos filho a DIV (end) tem, se for === 4 WIN
    if(end.childElementCount === 4) {
        output = true
        container.innerText = "WIN"
        container.classList.add('info')
        container.classList.remove('hidden')
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

