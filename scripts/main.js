/* ========================================
   MAIN JAVASCRIPT FILE (main.js)
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Element Selection ---
    // Sections
    const lobbySection = document.getElementById('lobby');
    const gallerySection = document.getElementById('gallery-walkthrough');
    const feedbackSection = document.getElementById('reflection-feedback');
    
    // Lobby
    const startTourBtn = document.getElementById('start-tour-btn');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const ambientMusic = document.getElementById('ambient-music');
    
    // Gallery
    const galleryContainer = document.getElementById('collections-container');
    const collectionTitleEl = document.getElementById('collection-title');
    const galleryNextBtn = document.getElementById('nav-next');
    const galleryPrevBtn = document.getElementById('nav-prev');
    const finishTourBtn = document.getElementById('finish-tour-btn');
    
    // Modal
    const modal = document.getElementById('artwork-focus-modal');
    // ... (rest of modal elements)
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImage = document.getElementById('artwork-image');
    const modalTitle = document.getElementById('artwork-title');
    const modalArtist = document.getElementById('artwork-artist');
    const modalYear = document.getElementById('artwork-year');
    const modalMedium = document.getElementById('artwork-medium');
    const modalNotes = document.getElementById('artwork-notes');

    
    // --- 2. Gallery State ---
    // Check if artworksData exists
    if (typeof artworksData === 'undefined' || !artworksData) {
        console.error("Artwork data (artworksData) is not loaded!");
        return;
    }
    
    // Get a unique, ordered list of collection names from the data
    const collections = [...new Set(artworksData.map(art => art.collection))];
    let currentCollectionIndex = 0;


    // --- 3. Lobby & Music Controls ---

    // Start Tour Button
    if (startTourBtn) {
        startTourBtn.addEventListener('click', () => {
            lobbySection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            
            // ALWAYS reset to the first collection when starting the tour
            currentCollectionIndex = 0;
            displayCurrentCollection();
        });
    }

    // Music Toggle Button
    if (musicToggleBtn && ambientMusic) {
        musicToggleBtn.addEventListener('click', () => {
            if (ambientMusic.paused) {
                ambientMusic.play();
                musicToggleBtn.textContent = '🔊 Pause Ambient Music';
            } else {
                ambientMusic.pause();
                musicToggleBtn.textContent = '🔊 Play Ambient Music';
            }
        });
    }
    
    // --- 4. Gallery Navigation (This is the new logic) ---
    
    if (galleryNextBtn) {
        galleryNextBtn.addEventListener('click', () => {
            // Move to the next collection if we're not at the end
            if (currentCollectionIndex < collections.length - 1) {
                currentCollectionIndex++;
                displayCurrentCollection();
            }
        });
    }

    if (galleryPrevBtn) {
        galleryPrevBtn.addEventListener('click', () => {
            // Move to the previous collection if we're not at the start
            if (currentCollectionIndex > 0) {
                currentCollectionIndex--;
                displayCurrentCollection();
            }
        });
    }

    if (finishTourBtn) {
        finishTourBtn.addEventListener('click', () => {
            // This button now navigates to the feedback page
            gallerySection.classList.add('hidden');
            feedbackSection.classList.remove('hidden');
        });
    }

    
    // --- 5. GALLERY & COLLECTION LOGIC (Replaces old loadGallery) ---
    
    /**
     * Displays the artworks for the *current* collection
     */
    function displayCurrentCollection() {
        // 1. Get current collection name
        const collectionName = collections[currentCollectionIndex];
        
        // 2. Update the <h3> title
        collectionTitleEl.textContent = collectionName;
        
        // 3. Filter artworksData to get only items from this collection
        const artworksToDisplay = artworksData.filter(art => art.collection === collectionName);
        
        // 4. Clear the gallery of old artworks
        galleryContainer.innerHTML = '';
        
        // 5. Loop and create elements for the new artworks
        artworksToDisplay.forEach(artwork => {
            const artworkElement = document.createElement('article');
            artworkElement.className = 'artwork-item';
            artworkElement.dataset.id = artwork.id;
            
            artworkElement.innerHTML = `
                <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
                <div class="artwork-item-info">
                    <h3>${artwork.title}</h3>
                    <p>${artwork.artist}</p>
                </div>
            `;
            
            artworkElement.addEventListener('click', () => {
                openModal(artwork);
            });
            
            galleryContainer.appendChild(artworkElement);
        });
        
        // 6. Update the nav buttons (disable/enable)
        updateNavButtons();
    }
    
    /**
     * Manages the state of the Prev, Next, and Finish buttons
     */
    function updateNavButtons() {
        // Disable "Previous" if on the first collection (index 0)
        galleryPrevBtn.disabled = (currentCollectionIndex === 0);
        
        // Check if on the last collection
        if (currentCollectionIndex === collections.length - 1) {
            // On last collection: Hide "Next", Show "Finish"
            galleryNextBtn.classList.add('hidden');
            finishTourBtn.classList.remove('hidden');
        } else {
            // Not on last collection: Show "Next", Hide "Finish"
            galleryNextBtn.classList.remove('hidden');
            finishTourBtn.classList.add('hidden');
        }
    }
    
    // --- 6. MODAL LOGIC (Unchanged) ---
    
    function openModal(artwork) {
        modalImage.src = artwork.image;
        modalImage.alt = artwork.title;
        modalTitle.textContent = artwork.title;
        modalArtist.textContent = artwork.artist;
        modalYear.textContent = artwork.year;
        modalMedium.textContent = artwork.medium;
        modalNotes.textContent = artwork.notes;
        
        modal.classList.remove('hidden');
        closeModalBtn.focus();
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // --- 7. INITIALIZATION ---
    console.log("MuseoSpace App Initialized.");
    
    // Load the first collection's data (it will be hidden)
    // This ensures it's ready when the user clicks "Start Tour"
    displayCurrentCollection(); 
});