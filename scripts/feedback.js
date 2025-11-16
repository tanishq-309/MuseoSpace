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
    const shareBtn = document.getElementById('share-social-link');

    // Form inputs
    const visitorName = document.getElementById('visitor-name');
    const visitorEmail = document.getElementById('visitor-email');
    const favoriteArtworkSelect = document.getElementById('favorite-artwork'); // <-- ADDED

    // Thank you message parts
    const thankYouHeading = document.getElementById('thank-you-heading');
    const submittedSummary = document.getElementById('submitted-feedback-summary');

    // --- 2. Populate Favorite Artwork Dropdown --- // <-- NEW SECTION
    function populateFavoriteArtworkDropdown() {
        // Check if the select element and the artwork data exist
        if (favoriteArtworkSelect && typeof artworksData !== 'undefined') {
            
            // Loop through artworksData and add an <option> for each
            artworksData.forEach(artwork => {
                const option = document.createElement('option');
                option.value = artwork.title; // Use the title as the value
                option.textContent = artwork.title; // Use the title as the text
                favoriteArtworkSelect.appendChild(option);
            });
        }
    }
    
    // Call the function right away to build the dropdown
    populateFavoriteArtworkDropdown();

    // --- 3. Form Submission Logic ---
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload

            // Get trimmed values
            const name = visitorName.value.trim();
            const email = visitorEmail.value.trim();

            // Simple validation
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

    // --- 4. Navigation Button Logic ---

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

    // --- 5. SHARE BUTTON LOGIC ---
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    const originalText = shareBtn.textContent;
                    shareBtn.textContent = 'Link Copied!';
                    setTimeout(() => {
                        shareBtn.textContent = originalText;
                    }, 3000);
                })
                .catch(err => {
                    console.error('Failed to copy link: ', err);
                    alert('Could not copy link to clipboard.');
                });
        });
    }

});