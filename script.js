let weather = {
    "apiKey": "c5e1c01ad608f6a0ea9e64ee01591ec4",

    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&lang=sv&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())

            /* .then((data) => console.log(data)) */

            .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Vädret i " + name;

        /* document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png"; */

        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Fuktighet: " + humidity + "%";
        document.querySelector(".wind").innerText = "Vind: " + speed + " m/s";
    },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function() {
    if(event.key == "Enter") {
        weather.search();
    }
})