function traductor(){
  var title =document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password =document.getElementById("inputPassword");
  var engText =document.getElementsByTagName("span")[0];
  var boton = document.getElementsByTagName("btn")[0];

  title.innerHTML="Inicia sesión";
  email.placeholder="Ingresa tu email";
  password.placeholder= "Contraseña";
  engText.innerHTML="Recuerdame";
  boton.innerHTML = "Iniciar Sesion";
}
traductor();

function mostrarD(){
  var email= document.getElementById("inputEmail").value;
  var password= document.getElementById("inputPassword").value;
  var datos = document.getElementById("datos");
  var parr = document.getElementById("parrafo");
  datos.innerHTML="Datos Ingresados";
  parr.innerHTML="El correo es " + email+ "<br/>La contraseña es "+ password;
}
