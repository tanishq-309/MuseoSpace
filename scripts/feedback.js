/* ========================================
   FEEDBACK FORM SCRIPT (feedback.js)
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Element Selection ---
    const feedbackForm = document.getElementById('feedback-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const feedbackSection = document.getElementById('reflection-feedback');
    const gallerySection = document.getElementById('gallery-walkthrough');
    const lobbySection = document.getElementById('lobby');

    // Button controls
    const restartTourBtn = document.getElementById('restart-tour-btn');
    const feedbackPrevBtn = document.getElementById('feedback-prev-btn');
    const shareBtn = document.getElementById('share-social-link'); // <-- ADDED

    // Form inputs
    const visitorName = document.getElementById('visitor-name');
    const visitorEmail = document.getElementById('visitor-email');
    
    // Thank you message parts
    const thankYouHeading = document.getElementById('thank-you-heading');
    const submittedSummary = document.getElementById('submitted-feedback-summary');

    // --- 2. Form Submission Logic ---
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload

            // ... (Validation logic is unchanged)
            const name = visitorName.value.trim();
            const email = visitorEmail.value.trim();
            if (name === '' || email === '') {
                alert('Please fill out your name and email.');
                return;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // --- If validation passes ---
            thankYouHeading.textContent = `Thank You, ${name}!`;
            submittedSummary.textContent = "We've received your feedback.";
            feedbackForm.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
        });
    }

    // --- 3. Navigation Button Logic ---

    // "Back to Gallery" button
    if (feedbackPrevBtn) {
        feedbackPrevBtn.addEventListener('click', () => {
            feedbackSection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            
            // Reset form
            feedbackForm.reset();
            feedbackForm.classList.remove('hidden');
            thankYouMessage.classList.add('hidden');
        });
    }

    // "Restart Tour" button
    if (restartTourBtn) {
        restartTourBtn.addEventListener('click', () => {
            feedbackSection.classList.add('hidden');
            lobbySection.classList.remove('hidden');

            // Reset form
            feedbackForm.reset(); 
            feedbackForm.classList.remove('hidden');
            thankYouMessage.classList.add('hidden');
        });
    }

    // --- 4. SHARE BUTTON LOGIC --- // <-- NEW SECTION
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            // Use the modern Navigator.clipboard API
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    // Success!
                    const originalText = shareBtn.textContent;
                    shareBtn.textContent = 'Link Copied!';
                    
                    // Revert text back after 3 seconds
                    setTimeout(() => {
                        shareBtn.textContent = originalText;
                    }, 3000);
                })
                .catch(err => {
                    // Error (e.g., on insecure HTTP)
                    console.error('Failed to copy link: ', err);
                    alert('Could not copy link to clipboard.');
                });
        });
    }

});