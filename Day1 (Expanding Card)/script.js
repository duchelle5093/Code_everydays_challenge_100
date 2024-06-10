let cards = document.querySelectorAll('.card')

cards.forEach((card) =>{
    card.style.margin = ('15px')
    card.addEventListener('click', ()=>{
        card.classList.toggle('active')
        card.classList.add('cards')
        
    })
})











