const main = document.getElementById('main')

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

function funcao(e){
    console.log(e.target.lastElementChild)
}

start.addEventListener('click', funcao)

offset.addEventListener('click', funcao)

end.addEventListener('click', funcao)



// let divs = document.querySelectorAll('.div')
// console.log(divs)

// for(let i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click', funcao)
// }