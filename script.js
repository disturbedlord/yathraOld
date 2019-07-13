var slideIndex = 0 , reviewIndex = 0;
showSlides();
showReview();

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
    if(reviewIndex > review.length) {reviewIndex = 2}
    review[reviewIndex - 1].style.display = "block";
    setTimeout(showReview , 3000);    
}