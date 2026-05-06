"use strict";

/*
    Gallery Script
    This script dynamically creates image elements using JavaScript nodes
    and displays them inside the gallery div.
*/

// Array holding image file names
let images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

// Get the gallery container
let galleryDiv = document.getElementById("gallery");

// Loop through images and create elements
for (let i = 0; i < images.length; i++) {

    // Create image element (node)
    let img = document.createElement("img");

    // Set image source
    img.src = "images/" + images[i];

    // Add alt text
    img.alt = "Gallery Image " + (i + 1);

    // Add class for styling
    img.className = "gallery-img";

    // Append image to gallery div
    galleryDiv.appendChild(img);
}