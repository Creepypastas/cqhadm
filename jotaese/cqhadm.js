function cqhadm_modificado(){
  var texto = document.getElementsByTagName('textarea')[0].value;
  var md5 = hex_md5(texto);

  var numero = cqhadm_calcularNumero(md5);
  cqhadm_actualizarNumero(numero);

  cqhadm_actualizarLocationHash(texto);
  adeese();

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

function cqhadm_tellmeANewThing(){
  document.getElementsByTagName('textarea')[0].value = antesdemorir_ideas[Math.floor(Math.random() * antesdemorir_ideas.length)];
  cqhadm_modificado();
}

document.addEventListener("DOMContentLoaded", function(event) {

  var params = location.hash.substring(1).split('&');
  if(params != ""){
      document.getElementsByTagName('textarea')[0].value=params[0].split('=')[1];
  cqhadm_modificado();
  }
  else{
    if(antesdemorir_ideas[0]){
      cqhadm_tellmeANewThing();
    }
    else{
      //TODO
    }


  }

  document.getElementsByTagName('textarea')[0].onchange=cqhadm_modificado;
});
