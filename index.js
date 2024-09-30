let menuBar = document.getElementById('menu-bar');
let navbar = document.querySelector('.navbar');
menuBar.onclick = () => {
    navbar.classList.toggle('active');
};

// Search functionality
let searchIcon = document.getElementById('search');
let searchBox = document.querySelector('.search');
searchIcon.onclick = () => {
    searchBox.classList.toggle('active');
};

// Order Now button functionality
let orderButtons = document.querySelectorAll('.orderNow button');
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Your order has been placed!");
    });
});

// Newsletter subscription form handling
let subscribeBtn = document.querySelector('.newsletter input[type="button"]');
subscribeBtn.onclick = () => {
    let emailInput = document.querySelector('.newsletter input[type="email"]').value;
    if (emailInput === "") {
        alert("Please enter a valid email address.");
    } else {
        alert(`Thank you for subscribing with ${emailInput}`);
        document.querySelector('.newsletter input[type="email"]').value = "";
    }
};

// Initialize Swiper for product and review sliders
const swiperProduct = new Swiper('.product-row', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperBlogs = new Swiper('.blogs-row', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperReview = new Swiper('.review-row', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});