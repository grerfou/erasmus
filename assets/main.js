

const image = document.getElementById('image');
const imageContainer = document.getElementById('imageContainer');

const imagePaths = {
    'Particles': 'data/0224.jpeg',
    'glass': 'data/untitled.jpg',
    'mold': 'data/pres.jpeg',
    'Exp': 'data/pres1.jpeg',
    'Ant': 'data/disp.png',
    'Organism': 'data/boid.png',
    'room': 'data/VetF.png'
};

function showImage(elementId) {
    const imagePath = imagePaths[elementId];
    if (imagePath && image) {
        image.src = imagePath;
        if (imageContainer) {
            imageContainer.style.display = 'block';
        }
    }
}

function hideImage() {
    if (imageContainer) {
        imageContainer.style.display = 'none';
    }
}

Object.keys(imagePaths).forEach((elementId) => {
    document.getElementById(elementId).addEventListener('mouseover', () => showImage(elementId));
});

document.querySelectorAll('h3').forEach((element) => {
    window.addEventListener('mouseout', hideImage);
});
