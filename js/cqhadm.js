function cqhadm_modificado(){
  var md5 = hex_md5(document.getElementById('cosaTexto').children[0].innerHTML);
//  console.log(md5);
  
  var numero = cqhadm_calcularNumero(md5);
  cqhadm_actualizarNumero(numero);
  
}

function cqhadm_calcularNumero(md5){
  return parseInt(md5.substring(0,3),16);
}

function cqhadm_actualizarNumero(numero){
  document.getElementById('numero').innerHTML=numero+":";
  
}
