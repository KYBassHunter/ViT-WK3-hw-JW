function start() {
  var current = new Date();
  var h = current.getHours();
  var m = current.getMinutes();
  var s = current.getSeconds();
  var day = current.getDay();
  var d = current.getDate();
  var month= current.getMonth();
  var y = current.getFullYear();
  m = correct(m);
  s = correct(s);
  month =month+1;
  switch (day){
      
          case 0:
              day = "Sunday";
              break;
          case 1:
              day = "Monday";
              break;
          case 2:
              day = "Tuesday";
              break;
          case 3:
              day = "Wednesday";
              break;
          case 4:
              day = "Thursday";
              break;
          case 5:
              day = "Friday";
              break;
          case 6:
              day = "Saturday";
              break;
         }
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  document.getElementById("date").innerHTML= day+", "+month+ "-" + d + "-" + y;

  
  var t = setTimeout(start, 1000);
}
function correct(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}