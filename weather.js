window.addEventListener('load', ()=> {
    let temperatureDegree = document.querySelector('.temperature-degree')

    const api = 'https://api.openweathermap.org/data/2.5/onecall?lat=22.29&lon=114.16&exclude=minutely,hourly&lang=zh_tw&appid=0ef99421ced3a49c3f775f6149a4dd8e&units=metric'

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temp} = data.current;
            //set DOM Element from API
            temperatureDegree.textContent = temp;
        });
});
