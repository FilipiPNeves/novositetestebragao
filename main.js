function abrirWhatsapp() {
    var datachegada = document.getElementById("datachegada").value;
    var datadepartida = document.getElementById("datapartida").value;
    var adultos = document.getElementById("qtdadultos").value;
    var criancas = document.getElementById("qtdcriancas").value;
  
    var url = "https://wa.me/5522997397377?text=" // Meu numero
      + "*DADOS*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Data Chegada*: " + datachegada + "%0a"
      + "*Data Partida*: " + datadepartida + "%0a"
      + "*Adultos*: " + adultos + "%0a"
      + "*Criancas*: " + criancas + "%0a"
      + "*ENVIE PARA OBTER O ORCAMENTO* " + "%0a"

    window.open(url, '_blank').focus();
  }
  