// Function to show the information in the HTML
function displayInfo(tag, text) {
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}

// Game information
displayInfo('#question-text', '🎲 Number Draw');
displayInfo('#question-subtext', 'Fill in the fields below to generate random numbers.');



