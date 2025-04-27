const claveApi= '1bf39f927d4e4b9a9fa210936252704';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = 'https://api.weatherapi.com/v1/current.json?q=${arequipa}&lang=${idioma}&key=${https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${1bf39f927d4e4b9a9fa210936252704}}';

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data.location);