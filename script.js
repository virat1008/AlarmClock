

var sound = new Audio("audio.wav");
sound.loop = true;

var h2 = document.getElementById('alarm');

// Showing the current time
var currentTime = setInterval(function(){
var date = new Date();

var hours = (12 - (date.getHours()));

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var show = (date.getHours()) < 12 ? 'AM' : 'PM';



if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}


h2.textContent = timeAddition(hours) + ":" + timeAddition(minutes) + ":" + timeAddition(seconds) + "" + show;

},1000);


// timeAddition Function

function timeAddition(time) {

return (time < 10) ? "0" + time : time;

}

function hrsOption(){

var select = document.getElementById('alarmhrs');
var hrs = 12

for (i=1; i <= hrs; i++) {
select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

}
}
hrsOption();

function minOption(){

var select = document.getElementById('alarmmins');
var min = 59;

for (i=0; i <= min; i++) {
select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
minOption();

function secOption(){

var select = document.getElementById('alarmsecs');
var sec = 59;

for (i=0; i <= sec; i++) {
select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
secOption();

//alarm Set
function alarmSet() {

var hr = document.getElementById('alarmhrs');

var min = document.getElementById('alarmmins');

var sec = document.getElementById('alarmsecs');

var ap = document.getElementById('horizon');


var selectedHour = hr.options[hr.selectedIndex].value;
var selectedMin = min.options[min.selectedIndex].value;
var selectedSec = sec.options[sec.selectedIndex].value;
var selectedAP = ap.options[ap.selectedIndex].value;

var alarmTime = timeAddition(selectedHour) + ":" + timeAddition(selectedMin) + ":" + timeAddition(selectedSec) + selectedAP;
console.log('alarmTime:' + alarmTime);

document.getElementById('alarmhrs').disabled = true;
document.getElementById('alarmmins').disabled = true;
document.getElementById('alarmsecs').disabled = true;
document.getElementById('horizon').disabled = true;
// Play alarm when time over
var h2 = document.getElementById('alarm');



setInterval(function(){

var date = new Date();

var hours = (12 - (date.getHours()));


var minutes = date.getMinutes();

var seconds = date.getSeconds();

var show = (date.getHours()) < 12 ? 'AM' : 'PM';




if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}

var currentTime = h2.textContent =timeAddition(hours) + ":" + timeAddition(minutes) + ":" + timeAddition(seconds) + "" + show;


if (alarmTime == currentTime) {
sound.play();
}

},1000);
	

}


function Delete() {

document.getElementById('alarmhrs').disabled = false;
document.getElementById('alarmmins').disabled = false;
document.getElementById('alarmsecs').disabled = false;
document.getElementById('horizon').disabled = false;
sound.pause();
}


