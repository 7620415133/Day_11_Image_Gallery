
const images = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        caption: "Beautiful Nature"
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        caption: "Beautiful Mountains"
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        caption: "Beautiful Beach"
    },
    {
        src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800",
        caption: "Beautiful Sunrise"
    }
];

let currentIndex = 0;
let slideshow = null;

const galleryImage = document.getElementById("galleryImage");
const caption = document.getElementById("caption");
const imageNumber = document.getElementById("imageNumber");
const dotsContainer = document.getElementById("dots");
const playPauseBtn = document.getElementById("playPauseBtn");

// Display image
function showImage() {
    galleryImage.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].caption;

    imageNumber.textContent =
        `Image ${currentIndex + 1} of ${images.length}`;

    updateDots();
}

// Next image
function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}

// Previous image
function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}

// Create navigation dots
function createDots() {
    dotsContainer.innerHTML = "";

    images.forEach((image, index) => {
        const dot = document.createElement("span");

        dot.className = "dot";

        dot.onclick = function() {
            currentIndex = index;
            showImage();
        };

        dotsContainer.appendChild(dot);
    });
}

// Update active dot
function updateDots() {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentIndex
        );
    });
}

// Play and Pause slideshow
function toggleSlideshow() {
    if (slideshow) {
        clearInterval(slideshow);
        slideshow = null;

        playPauseBtn.textContent = "▶ Play Slideshow";
    } else {
        slideshow = setInterval(nextImage, 2000);

        playPauseBtn.textContent = "⏸ Pause Slideshow";
    }
}

// Start gallery
createDots();
showImage();
