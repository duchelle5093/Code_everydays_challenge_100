let span = document.querySelector('span')
let container = document.querySelector('.container')
let percent = document.querySelector('.nbre')
let increment = 0;

percent.style.display = ('none')

window.addEventListener('load', ()=>{
    percent.style.display = ('block')
    const delay = setInterval(() => {
       increment += 1;
       container.classList.add('active')
       span.innerHTML = increment
       if(increment >= 100){
            clearInterval(delay)
            percent.style.display = ('none')
            container.classList.add('stop-blur')
       }
   } , 20)
})










