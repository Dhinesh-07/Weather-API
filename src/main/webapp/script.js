let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {
   
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=metric`;
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
   
    //Clear the input field
    cityRef.value = "";
    fetch(url1) .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        
        console.log(data.name);
        console.log(data.weather[0].description);
        console.log(data.main.temp);
        console.log(data.main.temp);
        console.log(data.main.feels_like);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        
        
         result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
 
      <h1 class="heading">${data.main.feels_like} &#176C </h1>
       
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data	.main.temp_max} &#176C</h4>
            </div>
        </div>
        `;
        
        
        
        })   
        .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  
        
        
        
        
        
        
        
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.city.country);
        console.log(data.city.name);
        
        
        console.log(data.list[0].dt_txt);
        console.log(data.list[0].weather[0].icon);
        console.log(data.list[0].weather[0].main);
        console.log(data.list[0].weather[0].description);
        console.log(data.list[0].main.temp_min);
        console.log(data.list[0].main.temp_max);
        
        
        console.log(data.list[0].weather[0].icon);
        console.log(data.list[0].weather[0].main);
        console.log(data.list[0].weather[0].description);
        console.log(data.list[0].main.temp_min);
        console.log(data.list[0].main.temp_max);
        
        
        console.log(data.list[0].weather[0].icon);
        console.log(data.list[0].weather[0].main);
        console.log(data.list[0].weather[0].description);
        console.log(data.list[0].main.temp_min);
        console.log(data.list[0].main.temp_max);
        
        
        console.log(data.list[0].weather[0].icon);
        console.log(data.list[0].weather[0].main);
        console.log(data.list[0].weather[0].description);
        console.log(data.list[0].main.temp_min);
        console.log(data.list[0].main.temp_max);
        
        
        
        
        
        
        
   
        result1.innerHTML = `<table class="rainbow" >

       <tr><td ><br>
        <h4 classs="weather">${data.list[0].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[0].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[0].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png"><br>
        <h1 class="content">${data.list[0].main.temp }&#176 C</h1><br>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[0].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[0].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        <td><br>
        <h4 classs="weather">${data.list[1].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[1].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[1].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png"><br>
        <div class="content">
        <h1 >${data.list[1].main.temp}  &#176C</h1><br>
        </div>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[1].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[1].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        <td><br>
        <h4 classs="weather">${data.list[2].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[2].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[2].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png"><br>
        <h1 class="heading">${data.list[2].main.temp} &#176C</h1><br>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[2].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[2].main.temp_max} &#176C</h4>
            </div>
        </div></td>
       
        <td><br>
        <h4 classs="weather">${data.list[3].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[3].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[3].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png"><br>
        <h1 class="heading">${data.list[3].main.temp}  &#176C</h1><br>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[3].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[3].main.temp_max} &#176C</h4>
            </div>
        </div></td>
      
        <td><br>
        <h4 classs="weather">${data.list[4].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[4].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[4].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png"><br>
        <h1 class="heading">${data.list[4].main.temp}  &#176C</h1><br>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[4].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[4].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        <td><br>
        <h4 classs="weather">${data.list[5].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[5].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[5].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png"><br>
        <h1 class="heading">${data.list[5].main.temp}  &#176C</h1><br>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[5].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[5].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        
        <td><br>
        <h4 classs="weather">${data.list[8].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[8].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[8].weather[0].description}</h4><br>
        <img src="https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png"><br>
        <div class="content">
     
        <h1 >${data.list[8].main.temp}  &#176C</h1><br>
        </div>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[8].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[8].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        
        
        <td><br>
        <h4 classs="weather">${data.list[16].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[16].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[16].weather[0].description}</h4><br>
       
        <img src="https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png"><br>
        <div class="content">
     
        <h1 >${data.list[16].main.temp}  &#176C</h1><br>
        </div>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[16].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[16].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
           
        
        <td><br>
        <h4 classs="weather">${data.list[24].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[24].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[24].weather[0].description}</h4><br>
       
        <img src="https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png"><br>
        <div class="content">
     
        <h1 >${data.list[24].main.temp} &#176C</h1><br>
        </div>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[24].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[24].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        
           
        
        <td><br>
        <h4 classs="weather">${data.list[32].dt_txt}</h4><br>
        <h4 classs="weather">${data.list[32].weather[0].main}</h4><br>
        <h4 classs="desc">${data.list[32].weather[0].description}</h4><br>
       
        <img src="https://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png"><br>
        <div class="content">
     
        <h1 >${data.list[32].main.temp} &#176C</h1><br>
        </div>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.list[32].main.temp_min} &#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.list[32].main.temp_max} &#176C</h4>
            </div>
        </div></td>
        
        
        
        
        
        </tr>
       
        </table>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result1.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
