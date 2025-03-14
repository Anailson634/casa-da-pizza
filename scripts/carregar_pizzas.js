var lista_pedidos={}
document.addEventListener('DOMContentLoaded', () => {
    fetch('pizzas.json' , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    return response.json();
}).then(data => {
    criar_lista(data["Tradicionais"], '.tradicionais-catalago')
    criar_lista(data["Especiais"], ".especiais-catalago")
}).catch(error => {
    console.log(error);
});
});

function criar_lista(data, divPai) {
    let main = document.querySelector(divPai);
    Object.entries(data).forEach(pizza => {
        let divPizza=document.createElement('div');
        divPizza.classList.add('pizza');
        let NomeH4=document.createElement("h4")
        NomeH4.classList.add("Nome-pizza")
        NomeH4.textContent=pizza[0]

        let divInformacoes=document.createElement("div")
        divInformacoes.classList.add("informacoes-pizza")
        divInformacoes.style.display='none';
        
        let pDescricao=document.createElement("p")
        pDescricao.textContent=pizza[1]

        let buttonAdicionar=document.createElement("input")
        buttonAdicionar.type="button"
        buttonAdicionar.value="Adicionar";

        let tamanho_bool=true
        divPizza.addEventListener("click", () => {
            let tamanho=pizza[1].length
            if (tamanho_bool) {
                if (tamanho<=45) {
                    divPizza.style.height=`${tamanho*2.8}px`
                }
                else if (tamanho > 45 && tamanho <=60){
                        divPizza.style.height=`${tamanho*2.5}px`
                } else if (tamanho >60 && tamanho < 70) {
                    divPizza.style.height=`${tamanho*2.2}px`
                } else if (tamanho >70 && tamanho < 90) {
                    divPizza.style.height=`${tamanho*1.8}px`
                } else {
                    divPizza.style.height=`${tamanho*1.7}px`
                }
                tamanho_bool=false
                setTimeout(() => {
                    divInformacoes.style.display='block';
                },300)
            } else {
                divInformacoes.style.display='none';
                divPizza.style.height="30px"
                tamanho_bool=true
            }
        })
        let adicionar_bool=true
        buttonAdicionar.addEventListener("click", ()=>{
            //alert(`Você clicou em ${pizza[0]}`)
            if (adicionar_bool) {
                lista_pedidos[pizza[0]]="cont"
                divPizza.style.backgroundColor="#47eb4741";
                buttonAdicionar.value="Remover";
                adicionar_bool=false
            } else {
                delete lista_pedidos[pizza[0]]
                divPizza.style.backgroundColor="white";
                buttonAdicionar.value="Adicionar";
                adicionar_bool=true
            }
        })

        divPizza.appendChild(NomeH4)
        divPizza.appendChild(divInformacoes)
        divInformacoes.appendChild(pDescricao)
        divInformacoes.appendChild(buttonAdicionar)
        main.appendChild(divPizza)  
        ;});
}

document.querySelector("#Enviar_pedidos_central").addEventListener("click", ()=>{
    enviar_dados(lista_pedidos)
})