// Function to show the information in the HTML
function displayInfo(tag, text) {
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}

// Game information
displayInfo('#question-text', '🎲 Number Draw');
displayInfo('#question-subtext', 'Fill in the fields below to generate random numbers.');

// Function get input values and sort numbers
function sortNumbers() {
    let quantity = document.getElementById('quantity-input').value;
    let from = parseInt(document.getElementById('from-input').value)
    let to = parseInt(document.getElementById('to-input').value);

    // Check if inputs are valid
    if (!quantity) {
        showAlert('Please enter the quantity!');
        return false;
    }
    if (!from) {
        showAlert('Please enter the start range!');
        return false;
    }
    if (!to) {
        showAlert('Please enter the end range!');
        return false;
    }
    if (from >= to) {
        showAlert('The start range must be less than the end range!');
        return false;
    }
    if (quantity < 1) {
        showAlert('Please enter a quantity greater than 1!');
        return false;
    }
    if (quantity > (to - from + 1)) {
        showAlert('The quantity cannot be greater than the range of numbers!');
        return false;
    }

    // Validate input values
    let drawn = []

    // Generate random numbers, add them to the drawn array and ensure no duplicates
    for (let i = 0; i < quantity; i++) {
        let randomNumber = generateRandomNumbers(from, to);

        // Check for duplicates numbers
        while (drawn.includes(randomNumber)) {
            randomNumber = generateRandomNumbers(from, to);
        }

        // Add the number to the drawn array if it's not already included
        drawn.push(randomNumber);
        }

    // Sort the drawn numbers and display in HTML
    let result = document.getElementById('result');
    result.innerHTML = `<div class="result-text">Drawn numbers: <span class="result-numbers">${drawn.join(', ')}</span></div>`;
}

// Function to generate random numbers
function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reset Game
function resetGame() {
    document.getElementById('quantity-input').value = '';
    document.getElementById('from-input').value = '';
    document.getElementById('to-input').value = '';
    document.getElementById('result').innerHTML = `<div class="result-text"> <span class="result-numbers">No numbers drawn yet</span></div>`;
}