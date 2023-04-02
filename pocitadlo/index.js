const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.value = String(number).padStart(2, '0');
  valueElm.textContent = valueElm.value
};

let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', (event) => {
 
  if (value < 99) {
  value = value + 1
  console.log(value)
  }
  updateCounter(value)

});

btnDown.addEventListener('click', (event) => {

  if (value > 0) {
    console.log(value)
    value = value - 1;
    
  }
  updateCounter(value)
});


//updateCounter(value);