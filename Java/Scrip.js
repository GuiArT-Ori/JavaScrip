//alert('Hola Mundo');
function ingresar(){
    var usuario=document.getElementById('usuario').nodeValue;
    var clave=document.getElementById('password').nodeValue;
       
      if(usuario==""){
          alert('Favor de ingresar su usuario');
          return false;
      }
      if(clave==""){
        alert('Favor de ingresar su clave');
        return false;
    }
     
    //alert(usuario);
    if(usuario=="certus"  && clave=="12345678"){
        alert('Bienvenido Sr. CERTUS');
        window.open('principal.html','menu administrador','height=500px, width=800px');
    }else{
        alert('No existe su usuario y/o clave ingresada consulta el areaTI');
    }
}