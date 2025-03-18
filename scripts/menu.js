function desaparecer(url_page, url_menu){
    let item_flex=document.querySelector(url_page);
    const elementos=[['.tradicionais-catalago','#menu-tradicionais'], ['.especiais-catalago', '#menu-especiais'],
        ['.doces-catalago', '#menu-doces'], ['.bebidas-catalago', '#menu-bebidas']]
    elementos.forEach(item =>{
        let item_none=document.querySelector(item[0]);
        let item_menu=document.querySelector(item[1]);
        if (item[0]==url_page){
            item_flex.style.display="flex";
            item_menu.style.backgroundColor="#eea4722f";
        } else {
            item_none.style.display="none";
            item_menu.style.backgroundColor="#ffffff00";
        }
    })
}