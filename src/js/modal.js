// Custom alert functions
function showAlert(message) {
    const alert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');

    alertMessage.textContent = message;
    alert.style.display = 'flex';
}

// Function to hide the custom alert
function hideAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

// Set up event listeners for the alert
document.addEventListener('DOMContentLoaded', function() {
    // Close alert when clicking X or OK button
    document.querySelector('.close-alert').addEventListener('click', hideAlert);
    document.querySelector('.btn-alert').addEventListener('click', hideAlert);

    // Close alert when clicking outside the content
    document.getElementById('custom-alert').addEventListener('click', function(e) {
        if (e.target === this) hideAlert();
    });
});

// Modified validation code
function checkInput() {
    const quantityInput = document.getElementById('quantity-input').value;
    const fromInput = document.getElementById('from-input').value;
    const toInput = document.getElementById('to-input').value;


    if (quantityInput === '' || fromInput === '' || toInput === '') {
        showAlert('Please enter a number!');
        return false;
    }

    return true;
}