const correctWord = "OpenAI"; // Mot-clé caché
        const inputField = document.getElementById("userInput");
        const button = document.getElementById("validateButton");

        function checkInput() {
            if (inputField.value.trim() === correctWord) {
                button.classList.add("active");
                button.disabled = false;
            } else {
                button.classList.remove("active");
                button.disabled = true;
            }
        }
