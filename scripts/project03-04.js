"use strict";

/*
  Reviews Page for The Hideaway
  This script displays guest reviews using arrays and a loop.
  Each review includes a title, reviewer name, date, text, and star rating.
*/

// Arrays storing review data
let reviewers = ["Emily R.", "James K.", "Sophia M.", "Daniel T."];
let reviewType = ["P", "P", "N", "P"]; // P = positive, N = needs improvement
let stars = [5, 4, 2, 5];
let reviewDates = ["03/15/2026", "03/12/2026", "03/10/2026", "03/05/2026"];
let reviews = [
  "Absolutely loved our stay! The cottage was cozy and peaceful.",
  "Great experience overall. The activities were a nice touch.",
  "Room was a bit smaller than expected, but still comfortable.",
  "Amazing getaway! Everything was perfect from start to finish."
];
let reviewTitles = [
  "Perfect Weekend Getaway",
  "Relaxing Stay",
  "Could Be Better",
  "Amazing Experience"
];

/*
  Function to generate star images based on rating
*/
function starImages(rating) {
  let imageText = "";
  for (let i = 1; i <= rating; i++) {
    imageText += "<img src='images/star.png' alt='star'>";
  }
  return imageText;
}

/*
  Loop through all reviews and display them on the page
*/
for (let i = 0; i < reviewers.length; i++) {
  let reviewCode = "";

  // Assign table style based on review type
  if (reviewType[i] === "P") {
    reviewCode += "<table class='prime'>";
  } else if (reviewType[i] === "N") {
    reviewCode += "<table class='new'>";
  } else {
    reviewCode += "<table>";
  }

  // Build review content
  reviewCode += "<tr><th colspan='2'>" + reviewTitles[i] + "</th></tr>";
  reviewCode += "<tr><td>By " + reviewers[i] + "</td>";
  reviewCode += "<td>" + reviewDates[i] + "</td></tr>";
  reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
  reviewCode += "<tr><td colspan='2'>" + starImages(stars[i]) + "</td></tr>";
  reviewCode += "</table>";

  // Display review inside the reviews div
  document.getElementById("reviews")
    .insertAdjacentHTML("beforeend", reviewCode);
}


