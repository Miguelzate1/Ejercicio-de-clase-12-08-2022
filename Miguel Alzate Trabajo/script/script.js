const panel= document.querySelectorAll('.panel');

panel.forEach(  panel => {
    panel.addEventListener('click', ()=>{
        removerActivoClass()
        panel.classList.add('activa')
    })
})

function removerActivoClass(){
    panel.forEach(panel=>{
        panel.classList.remove('activa')
    })

    
}