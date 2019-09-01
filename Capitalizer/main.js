// wait until DOM is ready
window.onload = function () {
    let copyElement = document.getElementById('copy-area');
    let pasteElement = document.getElementById('paste-area');
    let buttonElement = document.getElementById('capitalize');

    buttonElement.onclick = function() {
        pasteElement.value = copyElement.value.toUpperCase();
    }
}