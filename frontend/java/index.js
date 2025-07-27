// index.js

// --- UI Toggle Logic (Existing, slightly modified for clarity) ---
const signbtnlink = document.querySelector('.signin-link'); // Link to switch to Sign In form
const signupbtnlink = document.querySelector('.signupbtn-link'); // Link to switch to Sign Up form
const wrapper = document.querySelector('.wrapper');

// Add null checks for robustness, in case elements aren't found
if (signupbtnlink && wrapper) {
    signupbtnlink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior (e.g., jumping to top)
        wrapper.classList.add('active'); // Add 'active' class to show signup form (adjust based on your CSS)
        console.log('Switched to Sign Up form');
    });
}

if (signbtnlink && wrapper) {
    signbtnlink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        wrapper.classList.remove('active'); // Remove 'active' class to show login form (adjust based on your CSS)
        console.log('Switched to Login form');
    });
}

// --- Form Submission Logic (NEW & IMPORTANT) ---

// Get references to the actual form elements using their new IDs
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Event Listener for Login Form Submission
if (loginForm) { // Check if the form exists before adding listener
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // PREVENT DEFAULT FORM SUBMISSION (page reload)

        // Get values from input fields
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        console.log('Login attempt:', { username, password });

        // --- Send this data to your Backend API ---
        try {
            const response = await fetch('http://localhost:3000/api/login', { // *** Ensure your backend server is running on this URL! ***
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json(); // Parse the JSON response from your backend

            if (response.ok) { // Check if the response status is 2xx (Success)
                alert('Login successful: ' + data.message);
                // Redirect user, store session/token, etc.
                // Example: window.location.href = '/dashboard.html';
            } else {
                alert('Login failed: ' + data.message); // Display error message from backend
            }
        } catch (error) {
            console.error('Network or backend error during login:', error);
            alert('Could not connect to the server. Please check your internet or backend server.');
        }
    });
}

// Event Listener for Sign Up Form Submission
if (signupForm) { // Check if the form exists before adding listener
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // PREVENT DEFAULT FORM SUBMISSION (page reload)

        // Get values from input fields
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        console.log('Sign Up attempt:', { username, email, password });

        // --- Send this data to your Backend API ---
        try {
            const response = await fetch('http://localhost:3000/api/signup', { // *** Ensure your backend server is running on this URL! ***
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json(); // Parse the JSON response from your backend

            if (response.ok) { // Check if the response status is 2xx (Success)
                alert('Sign Up successful: ' + data.message);
                // Optionally, switch to the login form after successful signup
                // if (wrapper) wrapper.classList.remove('active');
            } else {
                alert('Sign Up failed: ' + data.message); // Display error message from backend
            }
        } catch (error) {
            console.error('Network or backend error during signup:', error);
            alert('Could not connect to the server. Please check your internet or backend server.');
        }
    });
}