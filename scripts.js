const dropdown = document.getElementById("project_dropdown_content");

const button = document.getElementById("project_button");

const burger_menu = document.getElementById("burger-menu");

const nav = document.getElementById("homepage_navigation");

function toggle_dropdown() {
    dropdown.classList.toggle("show");
    button.classList.toggle("project_button_click");
}

function fade_animation() {
    burger_menu.classList.toggle("active")
    nav.classList.toggle("active")
}

burger_menu.addEventListener("click", fade_animation)