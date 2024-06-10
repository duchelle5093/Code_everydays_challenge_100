let number = document.querySelectorAll(".number")
let bar = document.querySelectorAll(".bar")
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')


let currentActive = 1
let barActive = 0
next.classList.add('color')


next.addEventListener('click', ()=>{
    currentActive ++
    barActive ++
    prev.disabled = false
    if(barActive >= bar.length){
        barActive = bar.length
        next.classList.remove('color')
        prev.disabled = false
    }else{
        prev.classList.add('color')
    }
    if(currentActive > number.length){
        currentActive = number.length
    }
    updateNext()
})

prev.addEventListener('click', ()=>{
    currentActive --
    barActive --
    if(barActive > bar.length){
        barActive = bar.length
    }
    if(currentActive > number.length){
        currentActive = number.length
    }else if(currentActive === 1) {
        prev.classList.remove('color')
        prev.disabled = true
    }else{
        prev.disabled = false
    }
    updatePrev()
})

function updatePrev (){
     number.forEach((circle , idx)=>{
        if(idx < currentActive){
            circle.classList.add('active-number')
            circle.classList.add('active')
        }else{
            circle.classList.remove('active-number')
            circle.classList.remove('active')
            next.classList.add('color')
        }
    })
    bar.forEach((bar , idx)=>{
        if(idx < barActive){
            bar.classList.add('active-bar')
            bar.classList.add('bar-active')
        }else{
            bar.classList.remove('active-bar')
            bar.classList.remove('bar-active')
        }
    })
}

function updateNext(){
    number.forEach((circle , idx)=>{
        if(idx < currentActive){
            circle.classList.add('active-number')
            circle.classList.add('active')
        }else{
            circle.classList.remove('active-number')
            circle.classList.remove('active')
        }
    })
    bar.forEach((bar , idx)=>{
        if(idx < barActive){
            bar.classList.add('active-bar')
            bar.classList.add('bar-active')
        }else{
            bar.classList.remove('active-bar')
            bar.classList.remove('bar-active')
        }
    })
}




