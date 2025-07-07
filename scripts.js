let index = 1;

function print_poop() {
    console.log(index + " Poop");
    index += 1;
}

document.getElementById("project_button").addEventListener("click", print_poop);