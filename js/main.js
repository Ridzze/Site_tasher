setInterval (
    function () {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (sec < 10) {sec = "0" + sec;}
    if (min < 10) {min = "0" + min;}
    if (hour < 10) {hour = "0" + hour;}

    time = hour+':'+min+':'+sec;

    document.getElementById ('timer').innerHTML = 'Time: ' + [time];

    var day=date.getDate();
    var mon=date.getMonth();
    var year=date.getFullYear();

    if (day < 10) {day="0"+day;}
    if (mon < 10) {mon="0"+mon;}

    document.getElementById ('date').innerHTML =
        'Date: ' + [day+'.'+mon+'.'+year+'&nbsp;&nbsp;'];
    },
1000);

function getWeatherKhabarovsk () {
    httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=2022890&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric')

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4

            if (httpRequest.status == 200) {
            //alert(httpRequest.responseText);
                var r = JSON.parse(httpRequest.responseText);

                document.getElementById("khabarovskWeather1").innerHTML = "Temperature: " + Math.round(r.main.temp) + " С";
                document.getElementById("khabarovskWeather2").innerHTML = "Humidity: " + r.main.humidity + " %";
                document.getElementById("khabarovskWeather3").innerHTML = r.weather[0].main;
                document.getElementById("khabarovskWeather4").innerHTML = "Pressure: " + Math.round(r.main.pressure * 0.75) + " mm";
                document.getElementById("khabarovskWeather5").innerHTML = r.weather[0].description;
            }

            else if (httpRequest.status == 400) {
                alert('There was an error 400');
            }

            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    httpRequest.send()
}

function getWeatherSaintPetersburg () {
    httpRequest = new XMLHttpRequest()
    httpRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric")

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (httpRequest.status == 200) {
                //alert(httpRequest.responseText);
                var r = JSON.parse(httpRequest.responseText);

                document.getElementById("SaintPetersburgWeather1").innerHTML = "Temperature: " + Math.round(r.main.temp) + " С";
                document.getElementById("SaintPetersburgWeather2").innerHTML = "Humidity: " + r.main.humidity + " %";
                document.getElementById("SaintPetersburgWeather3").innerHTML = r.weather[0].main;
                document.getElementById("SaintPetersburgWeather4").innerHTML = "Pressure: " + Math.round(r.main.pressure * 0.75) + " mm";
                document.getElementById("SaintPetersburgWeather5").innerHTML = r.weather[0].description;
            }

            else if (httpRequest.status == 400) {
                alert('There was an error 400');
            }

            else {
                alert('something else other than 200 was returned');
            }
        }
    };

    httpRequest.send()
}

function getWeatherMoscow () {
    httpRequest = new XMLHttpRequest()
    httpRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric")

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (httpRequest.status == 200) {
                //alert(httpRequest.responseText);
                var r = JSON.parse(httpRequest.responseText);

                document.getElementById("MoscowWeather1").innerHTML = "Temperature: " + Math.round(r.main.temp) + " С";
                document.getElementById("MoscowWeather2").innerHTML = "Humidity " + "- " + r.main.humidity + " %";
                document.getElementById("MoscowWeather3").innerHTML = r.weather[0].main;
                document.getElementById("MoscowWeather4").innerHTML = "Pressure " + "- " + Math.round(r.main.pressure * 0.75) + " mm";
                document.getElementById("MoscowWeather5").innerHTML = r.weather[0].description;
            }

            else if (httpRequest.status == 400) {
                alert('There was an error 400');
            }

            else {
                alert('something else other than 200 was returned');
            }
        }
    };
    httpRequest.send()
}

//--------------------------------------------------------
// Функция меняет видимость элемента
var tegId;

function hidemsk( tegId ) {
    var td = document.getElementById(tegId);

    if (td.style.opacity == 1) td.style.opacity = 0;

    else td.style.opacity = 1;
}
