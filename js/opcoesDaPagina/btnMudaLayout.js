const btnMudaLayout = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

function mudaTexto() {
    if(btnMudaLayout.innerText == 'Linhas'){
        btnMudaLayout.innerText = 'Blocos'
    }
    else {
        btnMudaLayout.innerText = 'Linhas'
    }
}

btnMudaLayout.addEventListener('click', mudaTexto)

function mudaLayout(){
    mural.classList.toggle('mural--linha')
}

btnMudaLayout.addEventListener('click', mudaLayout )

