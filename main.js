import './style.css'

const colors = {
  '#d7d9d7': 'Platinium',
  '#c9c5cb': 'French Gray',
  '#baacbd': 'Rose Quartz',
  '#b48eae': 'Lilac',
  '#585668': 'Davys Grey'
}
const inputColor = document.querySelector('#color-input');
const select = document.querySelector("#color-picker");
const h2Title = document.querySelector("#bgTitle");
function colorOptions() {
  for (let clave in colors) {
    const option = document.createElement("option");
    option.value = clave;
    option.innerText = colors[clave];
    select.appendChild(option);
  }
}

function changeColorBg(event) {
  const colorCode = event.target.value;
  h2Title.innerText = `${colors[colorCode] || '-'} ${colorCode}`;
  document.body.style.backgroundColor = colorCode;
}
colorOptions();
select.addEventListener("change", changeColorBg);
inputColor.addEventListener("change", changeColorBg);