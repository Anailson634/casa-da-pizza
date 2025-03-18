var lista_pedidos={}
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api-casa-da-pizza.onrender.com' , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    return response.json();
}).then(data => {
    criar_lista(data["Tradicionais"], '.tradicionais-catalago', data["Bordas Recheadas"], data["Tradicionais tamanho"]); 
    criar_lista(data["Especiais"], ".especiais-catalago", data["Bordas Recheadas"], data["Especiais e doces tamanho"]);
    criar_lista(data["Doces"], ".doces-catalago", data["Bordas Recheadas"], data["Especiais e doces tamanho"] );
}).catch(error => {
    console.log(error);
});
});

function criar_lista(data, divPai, bordasPizza, tamanhosPizza) {
    let main = document.querySelector(divPai);
    Object.entries(data).forEach(pizza => {
        let card=document.createElement("div");
        card.classList.add("card");
        let cardCircle=document.createElement("div");
        cardCircle.classList.add("card-circle");
        cardCircle.innerHTML=pizza[1]["Icon"];

        //Card frontal
        let cardFront=document.createElement("div");
        cardFront.classList.add("card-front")
        let cardInfo=document.createElement("div");
        cardInfo.classList.add("card-info");
        let hInfo=document.createElement("h3");
        hInfo.textContent=pizza[0];
        let pInfo=document.createElement("p");
        pInfo.textContent=pizza[1]["Detalhes"];

        //Card fundo
        let cardBack=document.createElement("div");
        cardBack.classList.add("card-infos-backs");
        cardBack.style.display="none";

        let setInfos=document.createElement("div");
        setInfos.classList.add("set-infos");
        setInfos.style.display="flex";
        let radioInfo=document.createElement("div");
        radioInfo.classList.add("radio-info");
        radioInfo.innerHTML="Tamanho";

        let bordaInfo=document.createElement("div");
        bordaInfo.classList.add("borda-info");

        bordaInfo.innerHTML="Bordas";
        let selectBorda=document.createElement("select");
        selectBorda.name="borda";
        selectBorda.id="bordas";
        let option_nenhum=document.createElement("option");
        option_nenhum.innerHTML="Nenhum";

        let addPizza=document.createElement("div");
        addPizza.classList.add("add_pizza");
        addPizza.innerHTML="Adicionar";


        //Funções
        cardFront.addEventListener("click",()=>{
            cardFront.style.display="none";
            cardBack.style.display="flex";
        }) 
        cardBack.addEventListener("click", function(event){
            if (['input', 'select'].includes(event.target.tagName.toLowerCase())){
                return;
            }
            cardBack.style.display="none";
            cardFront.style.display="flex";
        })
        //Adicionar a tela
        main.appendChild(card);
        card.appendChild(cardFront);
        card.appendChild(cardBack);

        cardFront.appendChild(cardCircle);
        cardFront.appendChild(cardInfo);
        cardInfo.appendChild(hInfo);
        cardInfo.appendChild(pInfo);

        cardBack.appendChild(setInfos);
        setInfos.appendChild(radioInfo);
        Object.entries(tamanhosPizza).forEach(tamanho_pizza => {
            let labelPizza=document.createElement("label");
            labelPizza.innerHTML=tamanho_pizza[0];
            let radioValor=document.createElement("input");
            radioValor.type="radio";
            radioValor.name="tamanho";
            radioValor.value=tamanho_pizza[1];
            labelPizza.appendChild(radioValor);
            radioInfo.appendChild(labelPizza);
        })
        setInfos.appendChild(bordaInfo);
        bordaInfo.appendChild(selectBorda);
        selectBorda.appendChild(option_nenhum);
        bordasPizza.forEach(borda_pizza => {
            let option_pizza=document.createElement("option");
            option_pizza.value=borda_pizza;
            option_pizza.innerHTML=borda_pizza;
            selectBorda.appendChild(option_pizza);
        })
        cardBack.appendChild(addPizza)
    });

}

document.querySelector("#Enviar_pedidos_central").addEventListener("click", ()=>{
    enviar_dados(lista_pedidos)
})


function send_pizza(){

}