const dropdown = document.getElementById("project_dropdown_content");

const button = document.getElementById("project_button");

const burger_menu = document.getElementById("burger-menu");

const nav = document.getElementById("homepage_navigation");

const burger_background = document.getElementById("burger-background");

function toggle_dropdown() {
    dropdown.classList.toggle("show");
    button.classList.toggle("project_button_click");
}

function fade_animation() {
    burger_menu.classList.toggle("active");
    nav.classList.toggle("active");

    if (!burger_background.classList.contains("active")) {
        burger_background.style.transitionDelay = "0s";
        burger_background.classList.add("active");
    }
    else {
        burger_background.style.transitionDelay = "0.5s";
        burger_background.classList.remove("active");
    }
}

burger_menu.addEventListener("click", fade_animation)

// formula buttons in project1.html
function toggle_formula_dropdown(button) {
    document.getElementById(button).classList.toggle("show_formula");
}