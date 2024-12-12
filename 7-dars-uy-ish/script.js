// Harakatlanadigan qutini topamiz
const box = document.getElementById('movable-box');

// Boshlang‘ich pozitsiya
let position = { top: 0, left: 0 };

// Tugmalarni topamiz
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

// Tugmalar funksiyasi
upButton.addEventListener('click', () => {
    position.top -= 10; // Tepaga 10px
    updatePosition();
});
downButton.addEventListener('click', () => {
    position.top += 10; // Pastga 10px
    updatePosition();
});
leftButton.addEventListener('click', () => {
    position.left -= 10; // Chapga 10px
    updatePosition();
});
rightButton.addEventListener('click', () => {
    position.left += 10; // O‘ngga 10px
    updatePosition();
});

// Pozitsiyani yangilash funksiyasi
function updatePosition() {
    box.style.top = position.top + 'px';
    box.style.left = position.left + 'px';
}
