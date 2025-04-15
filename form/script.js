document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validation flag
    let valid = true;
    let errorMessage = '';

    // Validate Name
    if (!name) {
        valid = false;
        errorMessage += 'Full name is required.\n';
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Invalid email address.\n';
    }

    // Validate Phone
    const phonePattern = /^[0-9]+$/;
    if (!phone || !phonePattern.test(phone)) {
        valid = false;
        errorMessage += 'Phone number must contain only digits.\n';
    }

    // Validate Message
    if (!message) {
        valid = false;
        errorMessage += 'Message cannot be empty.\n';
    }

    // Display results
    const messageResult = document.getElementById('messageResult');
    if (valid) {
        messageResult.classList.remove('error');
        messageResult.classList.add('success');
        messageResult.textContent = 'Your message has been sent successfully!';
    } else {
        messageResult.classList.remove('success');
        messageResult.classList.add('error');
        messageResult.textContent = errorMessage;
    }
});
