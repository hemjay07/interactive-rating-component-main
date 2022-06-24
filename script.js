"use strict";
// create a state function that allows the submit button to change the div to thanks only if the rating has been done
let rated = false;
// Select all the score element and destructed the nodelist returned into an array
const scores = [...document.querySelectorAll(".scores")];

// console.log(bread);

// for each score in the array:
scores.forEach((score) => {
  // Add event listener to each of the score
  score.addEventListener("click", function () {
    //   from the array of scores, find the score whose background color is grey(clicked)
    const clickedScore = scores.find(
      (x) => x.style.backgroundColor === "rgb(149, 158, 172)"
    );
    if (clickedScore) {
      // if any of the score is grey(clicked), reset the background color(javascript only affects the inline style so changing the style.backgroundColor to "" will reset the background color to style in the css stylesheet)
      clickedScore.style.backgroundColor = "";
    }
    // Change the background color of the currently clicked score to grey(clicked)
    score.style.backgroundColor = "rgb(149, 158, 172)";
    rated = true;
  });
});

const submit = document.getElementById("submit");
const thanks = document.getElementById("thanks");
const rating = document.getElementById("rating");
const message = document.getElementById("message");

submit.addEventListener("click", function () {
  if (rated) {
    rating.style.display = "none";
    thanks.style.display = "block";
    // find the score that has been clicked so as to display it has the choosen one
    const theChosenOne = scores.find(
      (score) => score.style.backgroundColor === "rgb(149, 158, 172)"
    );
    // set the inner html of the message element to report what the rating is
    message.innerHTML = `You selected ${theChosenOne.innerHTML} out of 5`;
  }
});
