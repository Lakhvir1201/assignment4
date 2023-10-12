"use strict";

const displayScores = (scores, scoresString) => {
  $("#scores").val(scoresString.join("\n"));
  // Reference:https://www.logilax.com/javascript-calculate-average/
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  $("#avr_score").text(avg);
};

$(document).ready(() => {
  const scores = [];
  let studentScores = [];
  $("#add_button").click(() => {
    // get the add form ready for next entry
    let firstName = $("#first_name").val();
    let lastName = $("#last_name").val();
    let score = $("#score").val();
    score = parseInt(score);

    if (firstName === "") {
      alert("Please enter first name.");
      $("#first_name").focus();
    } else if (lastName === "") {
      alert("Please enter last name.");
      $("#last_name").focus();
    } else if (score === "") {
      alert("Please enter score");
      $("#score").focus();
    } else if (!Number.isInteger(score)) {
      // Reference:https://www.w3schools.com/jsref/jsref_isinteger.asp
      alert("Please enter number");
      $("#score").focus();
    } else {
      studentScores.push(firstName + ", " + lastName + ": " + score);
      scores.push(score);

      displayScores(scores, studentScores);
      $("#first_name").val("");
      $("#last_name").val("");
      $("#score").val("");
      $("#first_name").focus();
    }
  }); // end click()

  $("#clear_button").click(() => {
    scores.length = 0;
    studentScores.length = 0;
    $("#avr_score").text("");
    $("#scores").val("");
    $("#first_name").focus();
  }); // end click()

  $("#sort_button").click(() => {
    studentScores = studentScores.sort();
    displayScores(scores, studentScores);
  }); // end click()

  $("#first_name").focus();
}); // end ready()
