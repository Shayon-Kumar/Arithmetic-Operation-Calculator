function add(event) {
  event.preventDefault();
  let name1 = document.getElementById('name').value;
  let in1 = parseFloat(document.getElementById('num1').value);
  let in2 = parseFloat(document.getElementById('num2').value);
  let output = document.querySelector('.result');

  if (isNaN(in1) || isNaN(in2)) {
    alert('Please enter valid numbers!');
    return;
  } else {
    let sum = in1 + in2;
    output.textContent = 'Hello ' + name1 + ', Your Add result is:' + sum;
  }
}
function subtract(event) {
  event.preventDefault();
  let name1 = document.getElementById('name').value;
  let in1 = parseFloat(document.getElementById('num1').value);
  let in2 = parseFloat(document.getElementById('num2').value);
  let output = document.querySelector('.result');

  if (isNaN(in1) || isNaN(in2)) {
    alert('Please enter valid numbers!');
    return;
  } else {
    let sum = in1 - in2;
    output.textContent = 'Hello ' + name1 + ', Your Subtract result is:' + sum;
  }
}
function divide(event) {
  event.preventDefault();
  let name1 = document.getElementById('name').value;
  let in1 = parseFloat(document.getElementById('num1').value);
  let in2 = parseFloat(document.getElementById('num2').value);
  let output = document.querySelector('.result');

  if (isNaN(in1) || isNaN(in2)) {
    alert('Please enter valid numbers!');
    return;
  } else {
    let sum = in1 / in2;
    output.textContent =
      'Hello ' + name1 + ', Your Divide result is:' + sum.toFixed(2);
  }
}
function multiply(event) {
  event.preventDefault();
  let name1 = document.getElementById('name').value;
  let in1 = parseFloat(document.getElementById('num1').value);
  let in2 = parseFloat(document.getElementById('num2').value);
  let output = document.querySelector('.result');

  if (isNaN(in1) || isNaN(in2)) {
    alert('Please enter valid numbers!');
    return;
  } else {
    let sum = in1 * in2;
    output.textContent = 'Hello ' + name1 + ', Your Multiply result is:' + sum;
  }
}
