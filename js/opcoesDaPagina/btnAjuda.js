;(function(){

    const btnAjuda = document.querySelector('#btnAjuda');

    btnAjuda.addEventListener('click', function(evento){

        let listaAjudas = [
            {
                conteudo: 'Bem vindo ao Ceep',
                cor: '#92C4EC'
            },
            {
                conteudo: 'Vc pode criar cartoes',
                cor: 'blue'
            },
            {
                conteudo: 'Vcpode trocar de cores os cartoes',
                cor: 'red'
            }
        ]

        //for of
        for(let objAjuda of listaAjudas){
            
            criarCartao(objAjuda)
            
        }
        
        
    })

    btnAjuda.classList.remove('no-js');

})()


