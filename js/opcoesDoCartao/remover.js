export function remover (cartao){
    cartao.classList.add('cartao--some');
    cartao.addEventListener('transitionend', function(){
        this.remove()
    })
}