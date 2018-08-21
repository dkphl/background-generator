let bodyBg = document.querySelector('body');
let cssGradient = document.querySelector('#cssGradient');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');

function setGradient () {
  bodyBg.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  cssGradient.textContent = 'background: linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
}

bodyBg.onload = setGradient();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);



console.log(bodyBg);
console.log(color1.value);
console.log(color2);
