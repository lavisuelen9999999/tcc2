
function menuShow(){
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
      document.getElementById('sumario').style.marginTop = "0"; // Move o título de volta para o topo
   } else {
      menuMobile.classList.add('open');
      document.getElementById('sumario').style.marginTop = "250px"; // Move o título para baixo do cabeçalho
   }
}