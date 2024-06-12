let opened = document.querySelector('.open')
let closer = document.querySelector('.closed')
let container = document.querySelector('.container')
let infos = document.querySelector('.navbar')


opened.addEventListener('click', ()=>{
    container.classList.add('rotate')
    opened.style.display =('none')
    closer.style.display = ('block')
    infos.classList.add('show')
})

closer.addEventListener('click', ()=>{
    container.classList.remove('rotate')
    opened.style.display =('block')
    infos.classList.remove('show')
    closer.style.display = ('none')
})

