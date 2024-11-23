function menuShow(){
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
      document.getElementById('titulo').style.marginTop = "0px"; // Move o título de volta para o topo
   } else {
      menuMobile.classList.add('open');
      document.getElementById('titulo').style.marginTop = "200px"; // Move o título para baixo do cabeçalho
   }
}