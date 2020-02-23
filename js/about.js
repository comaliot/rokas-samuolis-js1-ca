const contentElement = document.querySelector('.content');

function updateText() {
    contentElement.innerHTML = contentElement.innerHTML.replace(/the/g, 'replaced').replace(/The/g, 'Replaced');
}

setTimeout(updateText, 4000);
