const claveApi = 'AIzaSyDoJ5W38HHiiMY6JyDMsw_MypE8FnePED82';
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
    
    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert ('Por Favor, ingrese una ciudad');
        return;
    }

    const apiClimaActual = 'https://api.weatherapi.com/v1/current.json?q=${arequipa}&lang=${idioma}&key=${https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${1bf39f927d4e4b9a9fa210936252704}}';

    const response = await fetch(apiClimaActual);
    const data = await response.json();

    mostrarClima(data);
}

   function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humeadad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind.kph + ' km/h';
   }