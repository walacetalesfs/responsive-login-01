const inputs = document.querySelectorAll('.input');

function onFocusInput() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function onBlurInput() {
    let parent = this.parentNode.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', onFocusInput);
    input.addEventListener('blur', onBlurInput);
});