(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    /* Selección de elementos por su ID */
    //var logo = document.getElementById('logo'); 
    // var navegacion = document.getElementById('navegacion');
    // navegacion.style.display = "none";
    
    /* Selección de elementos por CLASES */
    // var navegacion = document.getElementsByClassName('navegacion');
    // console.log(navegacion[0]);

    // var contenido  = document.getElementsByClassName('contenido');
    // console.log(contenido[0]);

    // contenido[0].style.display = "none";


    /* Selección de etiquetas */
    // var enlaces = document.getElementsByTagName('a');
    // console.log(enlaces);

    // for (var i = 0; i < enlaces.length; i++) {
    //   enlaces[i].setAttribute('target', '_blank');
    // }

    // var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSidebar);

    // for(var i = 0; i < enlacesSidebar.length; i++) {
    //   enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
    // }

    /* Selectores al estilo  CSS */
    // var logo = document.querySelector('#logo');
    // console.log(logo);

    // var encabezado = document.querySelectorAll('h2, footer p');
    // console.log(encabezado);

    /* Selección de varios elementos o atributos */

    var enlace = document.querySelectorAll('a');
    for (var i = 0; i < enlace.length; i++) {
      console.log(enlace[i].innerText); //Ingresar al Texto
    }



  });
  
})();