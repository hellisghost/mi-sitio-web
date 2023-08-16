var barMenu = document.querySelector("#bar-menu");
var main_Menu = document.querySelector("#main-nav"); 
var main_menu_phone = document.querySelector("#main-nav-phone")

barMenu.addEventListener("click", function() {
    main_Menu.style.display = "none"
    main_menu_phone.style.background = "#202020"
});