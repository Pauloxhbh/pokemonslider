const voltar1 = document.getElementById("voltar");
const avancar1 = document.getElementById("avancar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoatual = 0;

function escondercartao (){
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");
}

avancar1.addEventListener("click", function () {
    
    if(cartaoatual === cartoes.length - 1) return

      
    
    cartaoatual++;
    cartoes[cartaoatual].classList.add("selecionado");
    
    escondercartao();
    }

    


    
    );

    voltar1.addEventListener("click", function () {

    if(cartaoatual === 0) return;
        
    escondercartao()

    cartaoatual--;
    cartoes[cartaoatual].classList.add("selecionado");
   
   
  });
  


