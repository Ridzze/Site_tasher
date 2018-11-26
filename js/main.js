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

    document.getElementById ('timer').innerHTML = ' Время: ' + [time];

    var day=date.getDate();
    var mon=date.getMonth();
    var year=date.getFullYear();

    if (day < 10) {day="0"+day;}
    if (mon < 10) {mon="0"+mon;}

    document.getElementById ('date').innerHTML =
        'Дата: ' + [day+'.'+mon+'.'+year+'&nbsp;&nbsp;'];
    },
1000);

var urlMoscow = "http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric";

var urlSaintPetersburg = "http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric";

var urlKhabarovsk = "http://api.openweathermap.org/data/2.5/weather?id=2022890&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric";

function getWeatherKhabarovsk () {
    httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=2022890&APPID=aca185f1e6a42aac039fe91064bb49e8&units=metric')

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (httpRequest.status == 200) {
            //alert(httpRequest.responseText);
            var r = JSON.parse(httpRequest.responseText)
            alert("Температура " + r.main.temp)
            alert("Влажность " + r.main.humidity + " %")
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
