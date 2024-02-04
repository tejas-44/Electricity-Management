document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    showAcknowledgment();
});

function showAcknowledgment() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

    // Dummy values for demonstration
    document.getElementById('customerId').innerText = Math.floor(1000000000000 + Math.random() * 9000000000000);
    document.getElementById('ackCustomerName').innerText = document.getElementById('customerName').value;
    document.getElementById('ackEmail').innerText = document.getElementById('email').value;
}
