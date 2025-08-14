document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactFormContainer = document.getElementById('contactFormContainer');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                // Check for a success message from the PHP script
                if (result.includes("Thank you")) {
                    contactFormContainer.style.display = 'none';
                    successMessage.style.display = 'block';
                    AOS.refresh();
                } else {
                    console.error('Error submitting form:', result);
                    alert('Oops! Something went wrong. Please try again.');
                }
            })
            .catch(err => {
                console.error('Error submitting form:', err);
                alert('Oops! Something went wrong. Please try again.');
            });
        });
    }
});