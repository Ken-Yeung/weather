var weatherbackground ;
var icon = "50d" ;
const weather_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=22.29&lon=114.16&exclude=minutely,hourly&lang=zh_tw&appid=0ef99421ced3a49c3f775f6149a4dd8e&units=metric';
async function getWeathger() {
  const response = await fetch(weather_url);
  const data = await response.json();
  const { temp, feels_like } = data.current;
  const { description } = data.current.weather[0];
  //"url('')"
  switch (icon) {
    case "01d":
      weatherbackground = "url('')";
      break;
    case "01n":
      weatherbackground = "url('')";
      break;
    case "02d":
      weatherbackground = "url('')";
      break;
    case "02n":
      weatherbackground = "url('')";
      break;
    case "03d":
      weatherbackground = "url('')";
      break;
    case "03n":
      weatherbackground = "url('')";
      break;
    case "04d":
      weatherbackground = "url('')";
      break;
    case "04n":
      weatherbackground = "url('')";
      break;
    case "09d":
      weatherbackground = "url('')";
      break;
    case "09n":
      weatherbackground = "url('')";
      break;
    case "10d":
      weatherbackground = "url('')";
      break;
    case "10n":
      weatherbackground = "url('')";
      break;
    case "11d":
      weatherbackground = "url('')";
      break;
    case "11n":
      weatherbackground = "url('')";
      break;
    case "13d":
      weatherbackground = "url('')";
      break;
    case "13n":
      weatherbackground = "url('')";
      break;
    case "50d":
      weatherbackground = "url('https://uploads-ssl.webflow.com/5ebc078b84f5ace6b7894a73/5ec2c85e15e67c5a03a8c424_subpageBG.jpg')";
      break;
    case "50n":
      weatherbackground = "url('')";
      break;
    default:
      weatherbackground = "url('https://uploads-ssl.webflow.com/5ebc078b84f5ace6b7894a73/5ec39cfaab4345a87ca38a4f_bluesky.jpg')"
  }
  
  document.getElementById('degreeapi').textContent = temp;
  document.getElementById('weatherapi').textContent = description;
  document.getElementById('feels').textContent = feels_like;
  document.getElementById('weatherbackground').style.backgroundImage = weatherbackground;
}
