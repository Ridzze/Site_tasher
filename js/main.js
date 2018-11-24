setInterval (
   function ()
   {
     var date = new Date();
   var hour=date.getHours();
   var min=date.getMinutes();
   var sec=date.getSeconds();
   if (sec < 10) {sec="0"+sec;}
   if (min < 10) {min="0"+min;}
   if (hour < 10) {hour="0"+hour;}
   time=hour+':'+min+':'+sec;
   document.getElementById ('timer').innerHTML =
   ' Время: ' + [time];
   var day=date.getDate();
   var mon=date.getMonth();
   var year=date.getFullYear();
   if (day < 10) {day="0"+day;}
   if (mon < 10) {mon="0"+mon;}
   document.getElementById ('date').innerHTML =
   'Дата: ' + [day+':'+mon+':'+year+'&nbsp;&nbsp;'];
   },
1000);
