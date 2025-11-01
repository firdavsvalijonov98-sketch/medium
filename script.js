// script.js
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 4500); // Change every 4.5 seconds
}

showSlides(); // Start the slider

function toggleFavorite(event) {
    event.preventDefault();
    let favorite = document.querySelector(".favorites");
    if (favorite.style.color !== "red") {
        favorite.style.color = "red";
    } else {
        favorite.style.color = "#333";
    }
}

function changeLanguage(lang) {
    alert("Язык изменён на: " + lang);
    // Add language switch logic here
}





const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Выбор цвета
document.querySelectorAll('.color-option').forEach(label => {
    label.addEventListener('click', function() {
        // Убираем активный класс у всех
        document.querySelectorAll('.color-option').forEach(l => {
            l.style.border = '2px solid transparent';
            l.style.transform = 'scale(1)';
        });
        // Добавляем текущему
        this.style.border = '2px solid #000';
        this.style.transform = 'scale(1.15)';
        
        const colorName = this.getAttribute('title');
        console.log('Выбран цвет:', colorName);
        // Здесь можно фильтровать товары
    });
});






const leftBtn = document.querySelector(".new-products .arrow.left");
const rightBtn = document.querySelector(".new-products .arrow.right");
const productList = document.querySelector(".new-products .product-list");

rightBtn.addEventListener("click", () => {
  productList.scrollBy({ left: 300, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  productList.scrollBy({ left: -300, behavior: "smooth" });
});

// Избранное (сердечко)
document.querySelectorAll(".favorite").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "❤️" : "♡";
  });
});



// Функция переключения темы
function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    
    if (body.classList.contains('light') || !body.classList.contains('dark')) {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleButton.textContent = '☀️'; // светлая иконка в темной теме
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleButton.textContent = '🌙'; // темная иконка в светлой теме
        localStorage.setItem('theme', 'light');
    }
}

// При загрузке страницы проверяем сохраненную тему
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const toggleButton = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        toggleButton.textContent = '☀️';
    } else {
        document.body.classList.add('light');
        toggleButton.textContent = '🌙';
    }
    
    // Добавляем обработчик на кнопку
    toggleButton.addEventListener('click', toggleTheme);
});



// Сортировка (заглушка)
document.getElementById('sort-select')?.addEventListener('change', function() {
    console.log('Сортировка:', this.value);
    // Позже добавишь AJAX или перерисовку товаров
});








