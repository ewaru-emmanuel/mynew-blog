'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

//date and time
var datetime=new Date();
console.log(datetime);
document.getElementById("currenttime").textContent=datetime;
//var endtime=datetime-newDate;
  //endtime=newDate();
  //var timeDiff=datetime-endtime;
  //timeDiff /=1000;
  //console.log(minutes + "minutes")
  //document.getElementById("passedtime").textContent=endtime;
  var datetime=new Date();
console.log(datetime);
document.getElementById("currenttime2").textContent=datetime;

var datetime=new Date();
console.log(datetime);
document.getElementById("currenttime3").textContent=datetime;
  


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}


