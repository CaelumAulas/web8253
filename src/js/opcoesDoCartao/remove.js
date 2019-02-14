//IIFE - Immediately invoked function expression
;(function(){
    
    const listaBtn = document.querySelectorAll('.opcoesDoCartao-remove');

    for(let indice = 0; indice < listaBtn.length; indice++){

        let btn = listaBtn[indice];

        btn.addEventListener('click', function(){
            //esta é uma função anonima de callback do click do botao
            const cartao = this.parentNode.parentNode;
        
            cartao.classList.add('cartao--some');
            
            //quando o transitonend acontecer no cartao, remove
            cartao.addEventListener('transitionend', function(){
                cartao.remove();
            })
            
        })
    }
    
})()

