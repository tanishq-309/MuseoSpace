document.addEventListener('DOMContentLoaded', () => {

    
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
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImage = document.getElementById('artwork-image');
    const modalTitle = document.getElementById('artwork-title');
    const modalArtist = document.getElementById('artwork-artist');
    const modalYear = document.getElementById('artwork-year');
    const modalMedium = document.getElementById('artwork-medium');
    const modalNotes = document.getElementById('artwork-notes');

    
    if (typeof artworksData === 'undefined' || !artworksData) {
        console.error("Artwork data (artworksData) is not loaded!");
        return;
    }
    

    const collections = [...new Set(artworksData.map(art => art.collection))];
    let currentCollectionIndex = 0;



    if (startTourBtn) {
        startTourBtn.addEventListener('click', () => {
            lobbySection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            
    
            currentCollectionIndex = 0;
            displayCurrentCollection();
        });
    }

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
    
    if (galleryNextBtn) {
        galleryNextBtn.addEventListener('click', () => {
            
            if (currentCollectionIndex < collections.length - 1) {
                currentCollectionIndex++;
                displayCurrentCollection();
            }
        });
    }

    if (galleryPrevBtn) {
        galleryPrevBtn.addEventListener('click', () => {
            
            if (currentCollectionIndex > 0) {
                currentCollectionIndex--;
                displayCurrentCollection();
            }
        });
    }

    if (finishTourBtn) {
        finishTourBtn.addEventListener('click', () => {
           
            gallerySection.classList.add('hidden');
            feedbackSection.classList.remove('hidden');
        });
    }

    
    function displayCurrentCollection() {
        
        const collectionName = collections[currentCollectionIndex];
        
        
        collectionTitleEl.textContent = collectionName;
        
        const artworksToDisplay = artworksData.filter(art => art.collection === collectionName);
        
        
        galleryContainer.innerHTML = '';
        
        
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
        
        
        updateNavButtons();
    }
    
    
    function updateNavButtons() {
       
        galleryPrevBtn.disabled = (currentCollectionIndex === 0);
        
        // Check if on the last collection
        if (currentCollectionIndex === collections.length - 1) {
            
            galleryNextBtn.classList.add('hidden');
            finishTourBtn.classList.remove('hidden');
        } else {
            
            galleryNextBtn.classList.remove('hidden');
            finishTourBtn.classList.add('hidden');
        }
    }
    
  
    
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

    console.log("MuseoSpace App Initialized.");
    
    displayCurrentCollection(); 
});