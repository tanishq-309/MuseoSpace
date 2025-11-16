// This creates a global variable that 'main.js' can access
// because it's loaded first in your index.html.

const artworksData = [
    // ===================================
    // RENAISSANCE (6 Items)
    // ===================================
    {
        id: "r001",
        collection: "Renaissance",
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "c. 1503–1506",
        medium: "Oil on poplar panel",
        image: "assets/images/artworks/renaissance_01.jpeg",
        notes: "Perhaps the most famous portrait in the world, known for its enigmatic smile and masterful sfumato technique."
    },
    {
        id: "r002",
        collection: "Renaissance",
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: "c. 1484–1486",
        medium: "Tempera on canvas",
        image: "assets/images/artworks/renaissance_02.jpeg",
        notes: "A quintessential example of Early Renaissance painting, depicting the goddess Venus arriving at the shore after her birth."
    },
    {
        id: "r003",
        collection: "Renaissance",
        title: "The School of Athens",
        artist: "Raphael",
        year: "c. 1509–1511",
        medium: "Fresco",
        image: "assets/images/artworks/renaissance_03.jpeg",
        notes: "A masterpiece fresco depicting a gathering of the greatest philosophers, mathematicians, and scientists of antiquity."
    },
    {
        id: "r004",
        collection: "Renaissance",
        title: "David",
        artist: "Michelangelo",
        year: "c. 1501–1504",
        medium: "Marble sculpture",
        image: "assets/images/artworks/renaissance_04.jpg",
        notes: "A 17-foot marble statue of the Biblical hero David, a prime example of High Renaissance sculpture."
    },
    {
        id: "r005",
        collection: "Renaissance",
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: "c. 1495–1498",
        medium: "Tempera on gesso, pitch, and mastic",
        image: "assets/images/artworks/renaissance_05.jpeg",
        notes: "One of the world's most recognizable paintings, depicting the final meal Jesus shared with his apostles."
    },
    {
        id: "r006",
        collection: "Renaissance",
        title: "Primavera",
        artist: "Sandro Botticelli",
        year: "c. 1482",
        medium: "Tempera on panel",
        image: "assets/images/artworks/renaissance_06.jpeg",
        notes: "A large panel painting celebrating spring, filled with mythological figures in a lush garden."
    },

    // ===================================
    // ABSTRACT (6 Items)
    // ===================================
    {
        id: "a001",
        collection: "Abstract",
        title: "Composition VII",
        artist: "Wassily Kandinsky",
        year: "1913",
        medium: "Oil on canvas",
        image: "assets/images/artworks/abstract_01.jpeg",
        notes: "A pinnacle of Kandinsky's pre-war work, this piece is a complex and tumultuous arrangement of color and form."
    },
    {
        id: "a002",
        collection: "Abstract",
        title: "Broadway Boogie Woogie",
        artist: "Piet Mondrian",
        year: "1942–1943",
        medium: "Oil on canvas",
        image: "assets/images/artworks/abstract_02.jpeg",
        notes: "Inspired by the grid of Manhattan and the rhythm of boogie-woogie music, Mondrian's final complete work."
    },
    {
        id: "a003",
        collection: "Abstract",
        title: "Blue Poles (Number 11, 1952)",
        artist: "Jackson Pollock",
        year: "1952",
        medium: "Enamel and aluminium paint on canvas",
        image: "assets/images/artworks/abstract_03.jpg",
        notes: "A hallmark of Pollock's 'drip painting' technique, this work is characterized by its rhythmic, chaotic energy."
    },
    {
        id: "a004",
        collection: "Abstract",
        title: "Black Square",
        artist: "Kazimir Malevich",
        year: "1915",
        medium: "Oil on linen",
        image: "assets/images/artworks/abstract_04.jpeg",
        notes: "A seminal work of Suprematism, intended to represent the 'zero point' of painting and a new beginning."
    },
    {
        id: "a005",
        collection: "Abstract",
        title: "No. 5, 1948",
        artist: "Jackson Pollock",
        year: "1948",
        medium: "Oil on fiberboard",
        image: "assets/images/artworks/abstract_05.jpeg",
        notes: "A classic example of Pollock's drip technique, featuring a dense web of colors that is both chaotic and unified."
    },
    {
        id: "a006",
        collection: "Abstract",
        title: "Composition with Red, Blue and Yellow",
        artist: "Piet Mondrian",
        year: "1930",
        medium: "Oil on canvas",
        image: "assets/images/artworks/abstract_06.jpg",
        notes: "A key work of the De Stijl movement, reducing art to its essential elements: primary colors, flat planes, and a grid."
    },

    // ===================================
    // MODERN (6 Items)
    // ===================================
    {
        id: "m001",
        collection: "Modern",
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        medium: "Oil on canvas",
        image: "assets/images/artworks/modern_01.jpeg",
        notes: "Painted from the window of Van Gogh's asylum room, renowned for its swirling, expressive brushstrokes."
    },
    {
        id: "m002",
        collection: "Modern",
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: "1931",
        medium: "Oil on canvas",
        image: "assets/images/artworks/modern_02.jpg",
        notes: "This iconic surrealist painting features melting pocket watches, challenging perceptions of time and reality."
    },
    {
        id: "m003",
        collection: "Modern",
        title: "Les Demoiselles d'Avignon",
        artist: "Pablo Picasso",
        year: "1907",
        medium: "Oil on canvas",
        image: "assets/images/artworks/modern_03.jpeg",
        notes: "A revolutionary work that helped pave the way for Cubism, portraying five nude female prostitutes."
    },
    {
        id: "m004",
        collection: "Modern",
        title: "The Scream",
        artist: "Edvard Munch",
        year: "1893",
        medium: "Oil, tempera, and pastel on cardboard",
        image: "assets/images/artworks/modern_04.jpeg",
        notes: "An icon of modern art, The Scream is a symbol of existential angst and the anxiety of the human condition."
    },
    {
        id: "m005",
        collection: "Modern",
        title: "Guernica",
        artist: "Pablo Picasso",
        year: "1937",
        medium: "Oil on canvas",
        image: "assets/images/artworks/modern_05.jpg",
        notes: "One of the most powerful anti-war paintings in history, depicting the bombing of the Basque town of Guernica."
    },
    {
        id: "m006",
        collection: "Modern",
        title: "The Son of Man",
        artist: "René Magritte",
        year: "1964",
        medium: "Oil on canvas",
        image: "assets/images/artworks/modern_06.jpg",
        notes: "A famous surrealist self-portrait, exploring themes of hidden identity with an apple obscuring the artist's face."
    }
];