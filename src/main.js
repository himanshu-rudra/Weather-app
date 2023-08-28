
let weather = {
    apiKey:"e0d1b79434d84f48c5973aab5b85a403",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },

    displayWeather: function(data){
           const {name} = data;
           const {icon, description} = data.weather[0];
           const {temp, humidity} = data.main;
           const {speed} = data.wind;
           document.querySelector(".city").innerHTML = "Weather in " + name;
           document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
           document.querySelector(".description").innerHTML = description;
           document.querySelector(".temp").innerHTML = temp + "°C";
           document.querySelector(".humidity").innerHTML= "Humidity: " + humidity + "%";
           document.querySelector(".wind").innerHTML = "Wind speed: " + speed+ "km";
        },
        search: function(){
            this.fetchWeather(document.querySelector(".search-box").value)
        }
};


document.querySelector(".bi-search").addEventListener("click",function(){
    weather.search();
})

