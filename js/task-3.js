const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length === 0) {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = nameInput.value.trim();
    }
})