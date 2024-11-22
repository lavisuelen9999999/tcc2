function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
       menuMobile.classList.remove('open');
       document.getElementById('sumario').style.marginTop = "150px"; // Move o título de volta para o topo
    } else {
       menuMobile.classList.add('open');
       document.getElementById('sumario').style.marginTop = "500px"; // Move o título para baixo do cabeçalho
    }
 }