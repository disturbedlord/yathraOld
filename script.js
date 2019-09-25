var slideIndex = 0 , reviewIndex = 0;
showSlides();
showReview();
checkWindowsSize();
var width,height;


function checkWindowsSize(){
width = this.innerWidth;
height = this.innerHeight;
    
    if(width < 1200){
        document.getElementById('top_menu').style.display = 'none';
        document.getElementById('social').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    }
    else {
        document.getElementById('top_menu').style.display = 'block';
        document.getElementById('social').style.display = 'block';
        document.getElementById('menu').style.display = 'none';
    }
    
    
    
    setTimeout(checkWindowsSize);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
  slides[slideIndex-1].style.display = "block";  
//  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showReview(){
    
    var i;
    var review = document.getElementsByClassName("blockquote");
    for(i = 0 ; i< review.length; i++){
        review[i].style.display = "none";
    }
    reviewIndex ++;
    if(reviewIndex > review.length) {reviewIndex = 1}
    review[reviewIndex - 1].style.display = "block";
    setTimeout(showReview , 3000);    
}

function showMenu(){
    document.getElementById("menu_nav").style.display = 'block';
    
}


function Onclose(){
    document.getElementById("menu_nav").style.display = "none";
}

$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });


function loadDesc(id){
  document.getElementById("map").style.display = "block";
  id--;
  var googleLink = "https://www.google.com/search?q=";
  var placeName = [];
placeName[0] = "Leh" ;
placeName[1] = "Chennai" ;
placeName[2] = "Bengaluru" ;
placeName[3] = "Kasi" ;
googleLink += placeName[id];
var state = ["Jammu And Kashmir" , "Tamil Nadu" , "Karnataka" , "Odissa"]
    document.getElementById("place").innerHTML = placeName[id];
    document.getElementById("state").innerHTML = state[id];
    document.getElementById("link").href = googleLink;


   
}