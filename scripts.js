// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const indicators = document.querySelectorAll('.indicators li');
    const number = document.querySelector('.indicators .number');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');


    /*const prev2Button = document.getElementById('prev');
    const next2Button = document.getElementById('next');


    const prev3Button = document.getElementById('prev');
    const next3Button = document.getElementById('next');


    const prev4Button = document.getElementById('prev');
    const next4Button = document.getElementById('next');

    
    const prev5Button = document.getElementById('prev');
    const next5Button = document.getElementById('next');
    
    */



    let currentIndex = 0;

    function updateActiveItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        number.textContent = `0${index + 1}`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateActiveItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateActiveItem(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateActiveItem(currentIndex);
        });
    });

    
    updateActiveItem(currentIndex);
});