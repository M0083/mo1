function handleReadMore(id1, id2) {
    const button = document.getElementById(id1);
    // Extendend Text
    const extendText = document.getElementById(id2);

    // Wenn Button geklickt wird
    button.onclick = () => {
        const buttonText = button.innerText;

        if (buttonText === 'Mehr lesen') {
            extendText.classList.remove('hidden');
            button.innerText = 'Weniger lesen';
        } else {
            extendText.classList.add('hidden');
            button.innerText = 'Mehr lesen';
        }
    }
}

(function() {
    // Wenn der Browser gestartet wird
    window.onload = () => {
        // Button
        handleReadMore('hero-button', 'extended-text');
        handleReadMore('hero-button2', 'extended-text2');
    }
})();
