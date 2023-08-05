
// Search input Change

let search_input = document.getElementById('search-input');
let icon_items = document.getElementsByClassName('icon-item');




// NavBar Bg Show & Hide
let nav = document.getElementById('nav');

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        nav.classList.add('bg');
    } else {
        nav.classList.remove('bg');

    }
}

// Navbar menu

let hambargar = document.getElementById('hambargar');
let navbar_menu = document.getElementById('navbar-menu');

hambargar.onclick = function () {
    navbar_menu.classList.toggle('active');

    if (this.innerHTML == `<i class="fas fa-bars"></i>`) {
        this.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
        this.innerHTML = `<i class="fas fa-bars"></i>`;
    }
}

// Slider

let next_btn = document.getElementById('next_btn');
let prev_btn = document.getElementById('prev_btn');

let sliders = document.getElementsByClassName('slider');
let slider_no = 1;
function next() {
    document.getElementById('slider' + slider_no).classList.remove('active');
    slider_no++;

    if (slider_no > sliders.length) {
        slider_no = 1;
    }
    document.getElementById('slider' + slider_no).classList.add('active');

}

function prev(){
    document.getElementById('slider' + slider_no).classList.remove('active');
    slider_no--;

    if (slider_no < 1) {
        slider_no = sliders.length;
    }
    document.getElementById('slider' + slider_no).classList.add('active');

}

next_btn.onclick = next
prev_btn.onclick = prev

// setInterval(next,'3000');

// Product Filter Js

let all_btn = document.getElementById('all_btn');
let helmet_btn = document.getElementById('helmet_btn');
let gloves_btn = document.getElementById('gloves_btn');
let light_btn = document.getElementById('light_btn');

let helmet_cards = document.getElementsByClassName('helmet');
let gloves_cards = document.getElementsByClassName('gloves');
let light_cards = document.getElementsByClassName('light');




all_btn.onclick = function(){
    for(let i = 0; i < helmet_cards.length;i++){
        helmet_cards[i].style.display = "block";
        gloves_cards[i].style.display = "block";
        light_cards[i].style.display = "block";
    }

    this.classList.add('active');
    helmet_btn.classList.remove('active');
    gloves_btn.classList.remove('active');
    light_btn.classList.remove('active');

}

helmet_btn.onclick = function(){
    for(let i = 0; i < helmet_cards.length;i++){
        gloves_cards[i].style.display = "none";
        light_cards[i].style.display = "none";
        helmet_cards[i].style.display = "block";
    }
    
    this.classList.add('active');
    all_btn.classList.remove('active');
    gloves_btn.classList.remove('active');
    light_btn.classList.remove('active');
}
gloves_btn.onclick = function(){
    for(let i = 0; i < helmet_cards.length;i++){
        helmet_cards[i].style.display = "none";
        light_cards[i].style.display = "none";
        gloves_cards[i].style.display = "block";
    }
    
    this.classList.add('active');
    all_btn.classList.remove('active');
    helmet_btn.classList.remove('active');
    light_btn.classList.remove('active');
}

light_btn.onclick = function(){
    for(let i = 0; i < helmet_cards.length;i++){
        helmet_cards[i].style.display = "none";
        gloves_cards[i].style.display = "none";
        light_cards[i].style.display = "block";
    }
    
    this.classList.add('active');
    helmet_btn.classList.remove('active');
    gloves_btn.classList.remove('active');
    all_btn.classList.remove('active');
}

