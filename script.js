// script.js
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
