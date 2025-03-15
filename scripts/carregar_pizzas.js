var lista_pedidos={}
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api-casa-da-pizza.onrender.com/pizzas' , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    return response.json();
}).then(data => {
    criar_lista(data["Tradicionais"], '.tradicionais-catalago')
    criar_lista(data["Especiais"], ".especiais-catalago")
    criar_lista(data["Doces"], ".doces-catalago")
}).catch(error => {
    console.log(error);
});
});

function criar_lista(data, divPai) {
    let main = document.querySelector(divPai);
    Object.entries(data).forEach(pizza => {
        let card=document.createElement("div")
        card.classList.add("card")
        let cardCircle=document.createElement("div");
        cardCircle.classList.add("card-circle");
        cardCircle.innerHTML="🍕"
        
        let cardInfo=document.createElement("div");
        cardInfo.classList.add("card-info");
        let hInfo=document.createElement("h3");
        hInfo.textContent=pizza[0]
        let pInfos=document.createElement("p");
        pInfos.textContent=pizza[1]

        main.appendChild(card);
        card.appendChild(cardCircle);
        card.appendChild(cardInfo)
        cardInfo.appendChild(hInfo);
        cardInfo.appendChild(pInfos);
        });
}

document.querySelector("#Enviar_pedidos_central").addEventListener("click", ()=>{
    enviar_dados(lista_pedidos)
})