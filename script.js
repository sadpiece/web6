const N = 5;
const array = []; 

let i = 0;
while (i < N) {
  const answer = prompt("Введіть число " + (i + 1) + " із " + N);
  
  if (answer === null) {
    alert("Введення скасовано.");
    break; 
  }
  
  const num = Number(answer);

  if (Number.isNaN(num) || answer.trim() === "") {
    alert("Помилка! Ви ввели текст або залишили поле порожнім, а треба число.");
  } 
  else {
    array.push(num);
    document.body.innerHTML += `<p>${num}</p>`; 
    i++; 
  }
}


if (array.length > 0) {

  let max = array[0];

  for (let j = 0; j < array.length; j++) {
    if (array[j] > max) {
      max = array[j];
    }
  }

  document.body.innerHTML += `<hr><p>Найбільше число: ${max}</p>`;
}
