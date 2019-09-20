window.calculadora = function(){
  var btnCombustivel = document.getElementById('btnCombustivel');
  btnCombustivel.addEventListener('click', function(){
  var valor = parseFloat(document.getElementById('valor').value);
  var qtd = parseFloat(document.getElementById('qtd').value);
  var result = parseFloat(valor) / parseFloat(qtd);
  var menor50 = "Insira um valor maior que 50.000,00";

  if(valor < 50000){
        document.getElementById('result').value = result;
  }else{
    document.getElementById('valor').value = menor50;
  }

  });
