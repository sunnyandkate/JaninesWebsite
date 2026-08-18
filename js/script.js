let mobileMenu = document.querySelector(".mobile_menu");
let toggleMenu = document.querySelector(".toggle_menu");



toggleMenu.addEventListener("click", function(){
   
    if (mobileMenu.style.display === "block") {
   		 mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
});
