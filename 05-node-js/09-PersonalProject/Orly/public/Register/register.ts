// Register.js  

async function handleRegister(event) {
    event.preventDefault(); // Prevent the default form submission

    // Directly access form values using event.target
    const form = event.target;  // The form element itself
    const username = form.username.value; // Get value from username input
    const email = form.email.value; // Get value from email input
    const password = form.password.value; // Get value from password input

    console.log("Username:", username, "Email:", email, "Password:", password);

    // Send data to the backend API using fetch
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        // Check if the response is ok before parsing JSON
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Network response was not ok: ${errorText}`);
        }

        const data = await response.json();

        if (response.ok) {
            alert('Registration successful');
            window.location.href = './../login/login.html';
        } else {
            alert(`Error: ${data.error || 'Registration failed'}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred. Please try again.');
    }
}
