let cards = document.querySelectorAll('.card')
let card1 = document.querySelector('.card1')
let title = document.querySelectorAll('span')

cards.forEach((card) =>{
    card.style.margin = ('15px')
    card.addEventListener('click', ()=>{
        remove()
        card.classList.add('active')
        card.classList.add('cards')
        card1.classList.add('activ')
        card1.classList.add('cards')

    })
})

function remove(){
    cards.forEach((card) =>{
        card.classList.remove('active')
    })
}








