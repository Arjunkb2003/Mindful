let count = 0;
let isDarkTheme = false;

function increaseCount() {
    count++;
    const countDisplay = document.getElementById('count');
    countDisplay.textContent = count;
    updateShape();
}

function resetCount() {
    count = 0;
    const countDisplay = document.getElementById('count');
    countDisplay.textContent = count;
    updateShape();
}

function changeColor(color) {
    const target = document.getElementById('target');
    target.style.backgroundColor = color;
}

function updateShape() {
    const target = document.getElementById('target');
    
    if (count % 5 === 0) {
        target.style.borderRadius = '50%'; // Circle shape
    } else if (count % 2 === 0) {
        target.style.borderRadius = '0'; // Square shape
    } else {
        target.style.borderRadius = '0.5rem'; // Rectangle shape
    }
}

function toggleTheme() {
    const body = document.body;
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}
