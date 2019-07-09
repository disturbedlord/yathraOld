var i= 0;

var review_arr = new Array('"There services are really good and friendly staff."' , '" services are really good and friendly staff."');



function changeReview(){
    document.getElementById("rev" + i).innerHTML = review_arr(i);
    i += 1;
    
}

setTimeout(changeReview() , 2000);