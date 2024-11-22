function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    let imagem = document.querySelector('.imagem1'); // Seleciona a imagem

    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        // Remove a margem superior para reposicionar a imagem para o topo
        imagem.style.marginTop = "0";
    } else {
        menuMobile.classList.add('open');
        // Define uma margem superior para mover a imagem para baixo quando o menu é aberto
        imagem.style.marginTop = "0"; // ou qualquer outro valor desejado
    }
}
