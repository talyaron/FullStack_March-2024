

async function handleLogin(event) {
    try {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        const response = await fetch('http://localhost:3004/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await response.json();
        console.log(jsonResponse);

        if (response.ok) {
            localStorage.setItem('token', jsonResponse.token);
            window.location.href = '../User-Homepage/user-homepage.html';
        } else {
            alert(jsonResponse.error || 'Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
    }
}

function handleLogout() {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page
    window.location.href = './login.html';
}
