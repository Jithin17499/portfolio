const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Designer", "Artist", "Thinker", "3d Artist"];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//-------------------------------------------------------------------------

/* Circling text trail- Tim Tilton
   Website: http://www.tempermedia.com/
   Visit: http://www.dynamicdrive.com/ for Original Source and tons of scripts
   Modified Here for more flexibility and modern browser support
   Modifications as first seen in http://www.dynamicdrive.com/forums/
   username:jscheuer1 - This notice must remain for legal use
   */

   ;(function(){

    // Your message here (QUOTED STRING)
    var msg = "OOOOOOOOOOOOOOOOOO";
    
    /* THE REST OF THE EDITABLE VALUES BELOW ARE ALL UNQUOTED NUMBERS */
    
    // Set font's style size for calculating dimensions
    // Set to number of desired pixels font size (decimal and negative numbers not allowed)
    var size = 10;
    
    // Set both to 1 for plain circle, set one of them to 2 for oval
    // Other numbers & decimals can have interesting effects, keep these low (0 to 3)
    var circleY = 3; var circleX = 3;
    
    // The larger this divisor, the smaller the spaces between letters
    // (decimals allowed, not negative numbers)
    var letter_spacing = 2.9;
    
    // The larger this multiplier, the bigger the circle/oval
    // (decimals allowed, not negative numbers, some rounding is applied)
    var diameter = 20;
    
    // Rotation speed, set it negative if you want it to spin clockwise (decimals allowed)
    var rotation = -0.01;
    
    // This is not the rotation speed, its the reaction speed, keep low!
    // Set this to 1 or a decimal less than one (decimals allowed, not negative numbers)
    var speed = 0.5;
    
    ////////////////////// Stop Editing //////////////////////
    
    if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
    
    msg = msg.split('');
    var n = msg.length - 1, a = Math.round(size * diameter * 0.208333), currStep = 20,
    ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
    o = document.createElement('div'), oi = document.createElement('div'),
    b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,
    
    mouse = function(e){
     e = e || window.event;
     ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
     xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
    },
    
    makecircle = function(){ // rotation/positioning
     if(init.nopy){
      o.style.top = (b || document.body).scrollTop + 'px';
      o.style.left = (b || document.body).scrollLeft + 'px';
     };
     currStep -= rotation;
     for (var d, i = n; i > -1; --i){ // makes the circle
      d = document.getElementById('iemsg' + i).style;
      d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
      d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
     };
    },
    
    drag = function(){ // makes the resistance
     y[0] = Y[0] += (ymouse - Y[0]) * speed;
     x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
     for (var i = n; i > 0; --i){
      y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
      x[i] = X[i] += (x[i-1] - X[i]) * speed;
     };
     makecircle();
    },
    
    init = function(){ // appends message divs, & sets initial values for positioning arrays
     if(!isNaN(window.pageYOffset)){
      ymouse += window.pageYOffset;
      xmouse += window.pageXOffset;
     } else init.nopy = true;
     for (var d, i = n; i > -1; --i){
      d = document.createElement('div'); d.id = 'iemsg' + i;
      d.style.height = d.style.width = a + 'px';
      d.appendChild(document.createTextNode(msg[i]));
      oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
     };
     o.appendChild(oi); document.body.appendChild(o);
     setInterval(drag, 25);
    },
    
    ascroll = function(){
     ymouse += window.pageYOffset;
     xmouse += window.pageXOffset;
     window.removeEventListener('scroll', ascroll, false);
    };
    
    o.id = 'outerCircleText'; o.style.fontSize = size + 'px';
    
    if (window.addEventListener){
     window.addEventListener('load', init, false);
     document.addEventListener('mouseover', mouse, false);
     document.addEventListener('mousemove', mouse, false);
      if (/Apple/.test(navigator.vendor))
       window.addEventListener('scroll', ascroll, false);
    }
    else if (window.attachEvent){
     window.attachEvent('onload', init);
     document.attachEvent('onmousemove', mouse);
    };
    
    })();
    

    
//-------------------------------------------------------------------------


let allpositions = []

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let isdrawing = false
let lastX = 0;
let lastY = 0;
let lineWidth = 15;
let rect = canvas.getBoundingClientRect();

canvas.width = 1000;
canvas.height = 400;

canvas.addEventListener('mouseover', (e) => {
    isdrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mouseout', (e) => {
    isdrawing = false;
    lineWidth = 1   
})



canvas.addEventListener('mousemove', function(e) {
    allpositions.push([lastX, lastY])
    if (!isdrawing) {
        return;
      }
    ctx.globalCompositeOperation="source-over";
    ctx.lineCap = 'round';
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 50
    ctx.beginPath();
    ctx.lineWidth = 5 + Math.random() * 3
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

//----------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// --------------------- SESSION STORAGE  -----------------

$(window).scroll(function () {
  //set scroll position in session storage
  sessionStorage.scrollPos = $(window).scrollTop();
});
var init = function () {
   //return scroll position in session storage
   $(window).scrollTop(sessionStorage.scrollPos || 0)
};
window.onload = init;

// PAGE TRANSITION FADE

// To simulate fade in effect when page is loaded instead of the mundane sudden display of elements

$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(1500);

  $('.link').click(function() {
    event.preventDefault();

    newLocation = this.href;
    $('body').fadeOut(2000, newPage);
  });

  function newPage() {
    window.location = newLocation;
  }
});



/* MAIL COPY */

// Select the button from the markup
const button = document.querySelector('.click-to-copy');


// Function that runs on click. It: 
// 1) Prevents the default behavior of the button (refresh the page);
// 2) Runs the copyToClipboard function;
// 3) Adds and removes some CSS classes, used for styling and notifying the user about the copy event
const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add('is-copied');
  setTimeout(() => { e.target.classList.remove('is-copied') }, 1200);
}

// Copy to clipboard function, taken from https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript/
const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

// Fire the event on click
button.addEventListener('click', clickToCopy);