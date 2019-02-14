;(function(){

    'use strict';

    const btn = document.querySelector('#btnMudaLayout');
    const mural = document.querySelector('.mural');
    
    function mudaTexto() {
        if(btn.innerText == 'Linhas'){
            btn.innerText = 'Blocos'
        }
        else {
            btn.innerText = 'Linhas'
        }
    }
    
    btn.addEventListener('click', mudaTexto)
    
    function mudaLayout(){
        mural.classList.toggle('mural--linha')
    }
    
    btn.addEventListener('click', mudaLayout )
    
    btn.classList.remove('no-js')

})()
