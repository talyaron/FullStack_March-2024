   function addWord() {
            const input = document.getElementById('wordInput').value;
            const displayArea = document.getElementById('displayArea');
            const wordElement = document.createElement('div');
            wordElement.textContent = input;
            displayArea.appendChild(wordElement);
            document.getElementById('wordInput').value = ''; // Clear the input field
        }