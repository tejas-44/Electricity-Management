// Dummy username for demonstration
const username = "John Doe";

document.getElementById('username').innerText = username;

document.getElementById('logoutBtn').addEventListener('click', function () {
    // Handle logout, redirect to login page
    alert("Logout clicked. Redirect to login page.");
});

document.getElementById('proceedToPay').addEventListener('click', function () {
    // Handle proceeding to payment, redirect to payment screen
    alert("Proceed to Pay clicked. Redirect to Payment screen.");
});
