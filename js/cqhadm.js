function cqhadm_modificado(){
  var texto = document.getElementById('cosaTexto').children[0].innerHTML;
  var md5 = hex_md5(texto); 

  var numero = cqhadm_calcularNumero(md5);
  cqhadm_actualizarNumero(numero);
  
  cqhadm_actualizarLocationHash(texto);
  
  
}

function cqhadm_calcularNumero(md5){
  return parseInt(md5.substring(0,3),16);
}

function cqhadm_actualizarNumero(numero){
  document.getElementById('numero').innerHTML=numero+":";
  
}

function cqhadm_actualizarLocationHash(texto){
  texto = encodeURIComponent(texto);
  location.hash="#t="+texto;
  
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var params = location.hash.substring(1).split('&');
  if(params != ""){
      document.getElementById('cosaTexto').children[0].innerHTML=params[0].split('=')[1];
  cqhadm_modificado();
  }
  else{
    console.log("No recibí hash. Imprimiré algo al azar.")
  }
});