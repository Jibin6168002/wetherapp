/* function chess(){
  a=confirm("Do you need to reload the site")
  if(a){
    location.reload();
  }
 
} */


function reloadPage() {
  location.reload();
  console.log("jibin")
}

searchIcon.addEventListener("click", function () {
  const cityName = document.getElementById('in').value;




  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateStr = currentDate.toLocaleDateString();
  




  if (cityName) {

    const apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=81b71d7f0cc29540883741901116fa4a`;

    //secomd fetching---------------------------------------------------------------------------------------------------------------------
    let temperature2;
    let icon2;
    let description2;
    let day2;



    let temperature3;
    let icon3;
    let description3;
    let day3;

    fetch(apiUrl1)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {

        const forecasts = data.list.filter((forecast, index) => index % 8 === 0).slice(1, 2);








        forecasts.forEach((forecast) => {
          const date2 = new Date(forecast.dt * 1000);
          day2 = date2.toLocaleDateString('en-US', { weekday: 'long' });
          temperature2 = Math.ceil(forecast.main.temp);


          icon2 = forecast.weather[0].icon;

          description2 = forecast.weather[0].description;


        });



      })



    //third   fetching---------------------------------------------------------------------------------------------------------------------




    fetch(apiUrl1)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {

        const forecasts = data.list.filter((forecast, index) => index % 8 === 0).slice(2, 3);








        forecasts.forEach((forecast) => {
          const date = new Date(forecast.dt * 1000);
          day3 = date.toLocaleDateString('en-US', { weekday: 'long' });

          temperature3 = Math.ceil(forecast.main.temp);
          icon3 = forecast.weather[0].icon;

          description3 = forecast.weather[0].description;



        });



      })



    //first fetching------------------------------------------------------------------------------------------------------



    fetch(apiUrl1)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {


        const city1 = data.city.name;
        const country1 = data.city.country;

        const forecasts = data.list.filter((forecast, index) => index % 8 === 0).slice(0, 1);





        forecasts.forEach((forecast) => {
          /*           const date = new Date(forecast.dt * 1000);
     const day = date.toLocaleDateString('en-US', { weekday: 'long' }); */
          const temperature1 = Math.ceil(forecast.main.temp);
          const pressure1 = Math.ceil(forecast.main.pressure);
          const humidity1 = Math.ceil(forecast.main.humidity);


          const icon1 = forecast.weather[0].icon;

          const description1 = forecast.weather[0].description;


          result.innerHTML = `
          <div class="container" id="result" style="background-color:rgb(30, 151, 199);width: 395px; height: 800px;">
          <div class="row">
          <div class="col">
            <img src="logoo - Copy.png" style="width:100px;margin-top: 15px;" alt="icon">
          </div>
          <div class="col" id="refresh">
          <button type="button"  style=" margin-top:20px;width: 50px; height: 50px;border-radius:50%;background-color:rgb(30, 151, 199);color:rgb(30, 151, 199);border:0; outline:0;" onclick="reloadPage()"><img src="refresh1.png" width="50px" alt="ff"></button> 


    
          </div>
    
        </div>













          <div >
          <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">${currentDateStr}</div>
               
            
          </div>
          <div class="row">
               
          <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">${currentTime}</div>
          </div>
          
          
          
          
            <div class="row">
              <ul>
                <li class="tem"><h3 style=" color:red; font-size: 50px;">${city1}</h3></li>
                <li class="tem"><img src="http://openweathermap.org/img/w/${icon1}.png"  style=" color:red; width: 150px;" alt=""></li>
                
                <li class="tem"><h1 style=" color:aqua; font-size: 40px;">${temperature1}°C</h1></li>
              </ul>
              
            </div>
            
            <div class="row" id="com">
              
                  <ul style="list-style-type: none;">
                  <li class="comp" style="color:yellow;font-size:large;font-family: 'Roboto';"> <img src="ff-removebg-preview.png" style="width: 20px;height: 20px;"  alt="">${description1}</li>
                   <br>
                  <li class="compoen" style="font-family: 'Kanit';color: whitesmoke;"> <img src="presurelogo.png" style="width: 20px;" alt=""> HUMIDITY: ${humidity1}%<span></span></li>
                    <li class="compoen" style="font-family: 'Kanit';color: whitesmoke;"> <img src="humiditylogo.png" style="width: 20px;" alt="">PRESSURE:${pressure1}</li>
                  
              
            
              <li class="comp" style="font-family: 'Kanit';color: whitesmoke;"><i class="fa-solid fa-globe" style="color:white;"></i>     COUNTRY:  ${country1}</li>
               
               </ul>
              
            </div>
            
          
            <span><h1 style=" display: flex; justify-content: center; font-family: 'Roboto';color: rgba(75, 0, 130, 0.638);">Forecast </h1></span>
            
            <div class="row" id="forca">
            
              <div class="col"  id="forca1">
                <div class="forcast"  style="color:green;background-color:rgba(173, 216, 230, 1);">
            <h6 style="padding: 10px;">${day2}</h6>
            <li><img src="http://openweathermap.org/img/w/${icon2}.png" width="50px" alt="">
              <h6>${temperature2}°C</h6></li>
            
           
                </div>
              </div>
            
              <div class="col" id="forca2">
                <div class="forcast" style="color:green;background-color:rgba(173, 216, 230, 1);">
                  <h6 style="padding: 10px;">${day3}</h6>
                  <li><img src="http://openweathermap.org/img/w/${icon3}.png" width="50px" alt="">
                    <h6>${temperature3}°C</h6></li>
                  
                  
                </div>
              </div>
             
            </div>
          
          
          
          </div>
          </div>
           

     
            `;
        });



      })







      .catch(error => {
        c=confirm("invalid input")
        if(c){
          location.reload();
        }
      });






  }
  



/* 
  chess();
  // Using an anonymous function
setTimeout( function() {
  b=confirm("do you want to refresh the page");
  if(b){
    location.reload();
  }
  else{
    setInterval(chess, 4000);
  }
}, 8000); */



});
