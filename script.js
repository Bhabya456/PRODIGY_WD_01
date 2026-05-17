// Select Navbar
const navbar = document.getElementById("navbar");

// Add Scroll Event
window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});