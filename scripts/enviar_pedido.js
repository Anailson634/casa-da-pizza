
function enviar_dados(json_pedidos) {
    console.log(lista_pedidos)
    fetch("http://127.0.0.1:5000/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(json_pedidos)
    })
}
