function toggle_dropdown() {
    const dropdown = document.getElementById("project_dropdown_content");
    const button = document.getElementById("project_button");

    dropdown.classList.toggle("show");
    button.classList.toggle("project_button_click");
}