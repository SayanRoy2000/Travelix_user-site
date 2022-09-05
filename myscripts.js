//Connection bar 
var prev_pos=window.pageYOffset;
window.onscroll = function() {
    var con_var=document.getElementById("connect");
    var cur_pos=window.pageYOffset;
    if(cur_pos>prev_pos)
    con_var.style.margin="-38px 0px 0px 0px";
    else 
    con_var.style.margin="0px 0px 0px 0px";
};
//Connection bar
//SEARCH BAR
let flag=0;
function displaysearch()
{
  var dis=document.getElementById("top_search");
  if(flag==0)
  {
    dis.className=dis.className.replace(" inactive", "");
    dis.className +=" active";
    flag=1;
  }
  else
  {
    dis.className=dis.className.replace(" active", "");
    dis.className +=" inactive";
    flag=0;
  }
}
//SEARCH BAR
//Sliding Window
let slideIndex=1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("home_slider");
  let dots = document.getElementsByClassName("page_indi");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].className= slides[i].className.replace(" active", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_page", "");
  }
  slides[slideIndex-1].className += " active";
  dots[slideIndex-1].className += " active_page";
}
//Sliding Window
//Booking Options
let i=0;
function currentOption(n){
  let opt=document.getElementsByClassName("options");
  opt[i].className=opt[i].className.replace(" active_option","");
  opt[i].className +=" inactive_option";
  i=n;
  opt[n].className=opt[n].className.replace(" inactive_option","");
  opt[n].className +=" active_option";
}
//Booking Options
//Package Slider
let Package=0;
function changePackage(n){
  let package_offer=document.getElementsByClassName("package_slider");
  let i;
  let package_number=package_offer.length;
  package_offer[Package].className=package_offer[Package].className.replace(" active_package","");
  package_offer[Package].className +=" inactive_package";
  Package +=n;
  if(Package<0)
  Package=package_number-1;
  else if(Package>package_number-1)
  Package=0;
  package_offer[Package].className=package_offer[Package].className.replace(" inactive_package","");
  package_offer[Package].className +=" active_package";
}
//Package Slider