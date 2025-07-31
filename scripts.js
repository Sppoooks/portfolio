const dropdown = document.getElementById("project_dropdown_content");

const button = document.getElementById("project_button");

const burger_menu = document.getElementById("burger-menu");

const nav = document.getElementById("homepage_navigation");

const burger_background = document.getElementById("burger-background");

const decrypt_element = document.getElementById("decrypt_element");

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

// Decryption effect
// The function should take a string and transform it into another string one random character at a time
// For example HwidjcIEjdw --> Hello World
//get length of input string
//get a random inde of the string character
//change character to correct character
const character_options = "ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789~!@#$%^&*-+=";
const decrypt_element_length = decrypt_element.innerHTML.length;

// Generate an array containing a a random integer from a uniform distribution
// The array is of random length
// The purpose for the array is provide a set of numbers assigned to the set of character options
function generate_array(min, max) {
	let rand_array = [];
	let rand_length;

	rand_length = Math.floor(Math.random()*(max - min) + min); // Generate a random number of the length of the array

	for (let i=0; i<rand_length; i++) {
		rand_array.push(Math.floor(Math.random()*character_options.length)); // Generate a random number, indexing the string of the character_options
	}

	return rand_array;
}

function generate_char_array() {
	
	const time = 1;

	let char_array_list = [];

	for (let i=0; i<decrypt_element_length; i++) {
		let int_array = generate_array(10, 50);
		let char_array = int_array.map(int_array => character_options[int_array]); // Turn index array to corresponding string array
		char_array.push(decrypt_element.innerHTML[i])
		char_array_list.push(char_array);
	}

	return char_array_list;
}

let char_array = generate_char_array();
const delay = 50; // milliseconds
const max_length = Math.max(...char_array.map(arr => arr.length));
let word_array = [];

for (let i=0; i<max_length; i++) {
	let word;
	word = char_array.map(row => {
		if (row.length > i) {
			return row[i];
		}
		else {
			return row[row.length - 1];
		}
	});
	word_array.push(word.join(""));
}

let i = 0;

const interval = setInterval(() => {
	decrypt_element.innerHTML = word_array[i];
	i++;

	if (i>=word_array.length) {
		clearInterval(interval);
	}
}, delay);
