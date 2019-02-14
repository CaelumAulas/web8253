; (function () {

    $.ajax({
        url: 'http://ceep.herokuapp.com/cartoes/carregar'
        ,method: 'GET'
        ,dataType: 'jsonp'
        ,data: { usuario: 'vanessa' }
        ,success: function(respostaApi){
            console.log(respostaApi);

            respostaApi.cartoes.forEach(function(cartao){
                criarCartao(cartao)
            })

        }
    }) 

    /* 
    let ajax = new XMLHttpRequest();

    ajax.open('GET', 'http://ceep.herokuapp.com/cartoes/carregar');

    ajax.responseType = 'json';
    ajax.setRequestHeader('Content-Type', 'application/json');

    let dadosUser = {
        usuario: 'vanessa'
    }

    ajax.send(JSON.stringify(dadosUser));

    ajax.addEventListener('load', function () {
        console.log(ajax.response);
    })
     */
})()