const url = 'http://127.0.0.1:8000/palabras/all';

const dataObj = {};
let randomData = {};

fetch(url)
  .then(response => response.json())
  .then(data => {
    for (const item of data) {
      dataObj[item.palabra] = item.significado;
    }
    const keys = Object.keys(dataObj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomValue = dataObj[randomKey];
    randomData = { [randomKey]: randomValue };
    console.log(randomData);
    // Usa la variable randomData aquí dentro del then del fetch
  })
  .catch(error => console.error(error));

// No uses la variable randomData aquí fuera del fetch
console.log(randomData);