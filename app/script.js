"use strict"
// ======================================================================//
// =========================VARIABLES====================================//
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let Quantity = document.getElementById('quantity')
let cartBtn =document.getElementById('cart_logo')
let cartNumber = document.querySelector('.cart_number')
let finalCartNumber = document.querySelector('.finalcart_number')
let finalPrice = document.querySelector('.final_price')
let cartContent = document.querySelector('.cart_content');
let Delete = document.querySelector('.delete');
let EmptyCart = document.querySelector('.empty_cart');
let checkoutBtn = document.querySelector('.Checkout_btn');
let addItem= document.getElementById('add_item');
let cartBox = document.querySelector('.cart_box')



// variables to access the html content
let quantity = Quantity.innerHTML;
// ===========Cart Box================
cartBtn.addEventListener("click",()=>{
cartBox.classList.toggle("display");
  

})

Delete.addEventListener("click",()=>{
    cartNumber.style.visibility="hidden";
    cartContent.style.visibility="hidden";
    checkoutBtn.style.visibility="hidden";
    EmptyCart.style.display="block";
    quantity =1;
    calcPrice( )
})

addItem.addEventListener("click",()=>{
    cartNumber.style.visibility="visible";
     cartContent.style.visibility="visible"
    checkoutBtn.style.visibility="visible"
    EmptyCart.style.display="none"
})

// =====Product increment & decrement======
const calcPrice=function(){
    Quantity.textContent=quantity; 
    cartNumber.textContent=quantity;
    finalCartNumber.textContent =quantity;
    let Price = 125 * quantity;
    Price = Price.toFixed(2);
    finalPrice.textContent=`$${Price}`
}

increase.addEventListener("click",()=>{
    quantity ++;
    calcPrice()
  
})


decrease.addEventListener("click",()=>{
    if(quantity ==1){
        quantity=1
    }else{
        quantity --;
        calcPrice()
    }

})
// To activate the slideshow
let zoomer = document.querySelector(".preview_image");
zoomer.addEventListener("click",()=>{
    slideshow.style.display="block";
    cartBox.classList.remove("display");
})
// For slideshow
let slideshow = document.querySelector(".slideshow_container")
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(slideIndex)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {
    slideIndex = 1
}    
  if (n < 1) {
    slideIndex = slides.length
}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0;i < dots.length;i++){
    dots[i].className=dots[i].className.replace("active" ," ")
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Close wrapper
function Close(){
slideshow.style.display="none";
console.log("Hello World")
}

// Remove cartbox in case you click any other part of the page
function rem_Cart(){
    cartBox.classList.remove("display");
}
// ============To display menu on smaller screens===============
let menu_btn = document.getElementById('menu_btn');
let close_btn = document.getElementById('close_btn');
let navlinks = document.querySelector('.nav_links');
let wrap = document.querySelector('.wrap');
function showMenu(){
navlinks.style.display="flex";
close_btn.style.display="block";
wrap.style.display="block";
}
close_btn.addEventListener("click",()=>{
  navlinks.style.display="none";
  close_btn.style.display="none";
  wrap.style.display="none";
})
