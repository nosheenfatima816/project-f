const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link'); // Assuming you have this link for switching forms
const wrapper = document.querySelector('.wrapper');

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signUpBtnLink.addEventListener('click', () => { // If you have a separate link to toggle to sign-up form
    wrapper.classList.toggle('active');
});


// --- New code for form submission ---
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        const userData = { username, email, password };

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', { // Adjust port if different
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.text(); // Assuming backend returns a string message
                alert(result); // Show success message
                // Optionally, switch to login form or clear fields
                wrapper.classList.remove('active'); // If 'active' makes it the sign-up form
                signupForm.reset(); // Clear form fields
            } else {
                const error = await response.text();
                alert(`Registration failed: ${error}`); // Show error message from backend
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    });
}