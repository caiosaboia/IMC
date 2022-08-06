function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcComparetion = document.querySelector('#comperation-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  var comparacao = comparacaoImc(imc);

  imcComparetion.textContent = comparacao;
}

function comparacaoImc(imc) {
  var resultado = '';

  if (imc < 16) {
    resultado = 'Muito abaixo do Peso';
  } else if (imc >= 16 && imc < 18.5) {
    resultado = 'Abaixo do Peso';
  } else if (imc >= 18.5 && imc < 25) {
    resultado = 'Peso Normal';
  } else if (imc >= 25 && imc < 30) {
    resultado = 'Acima do Peso';
  } else if (imc >= 30 && imc < 35) {
    resultado = 'Obesidade gau I';
  } else if (imc >= 35 && imc < 40) {
    resultado = 'obesidade grau II';
  } else {
    resultado = 'Obesidade grau III';
  }
  return resultado;
}

start();
