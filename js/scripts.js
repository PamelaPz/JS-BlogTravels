(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    /* Selección de elementos por su ID */
    //var logo = document.getElementById('logo'); 
    // var navegacion = document.getElementById('navegacion');
    // navegacion.style.display = "none";
    
    /* Selección de elementos por CLASES */
    var navegacion = document.getElementsByClassName('navegacion');
    console.log(navegacion[0]);
    
  });
  
})();