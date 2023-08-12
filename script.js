"use strict";

const btnStudy = document.querySelector(".btnStudy");
const labelStudyTime = document.querySelector(".studyTime");
const labelTotalTime = document.querySelector(".totalTime");
let studyArr = [];

const calcRandomStudyTime = function () {
  const random = Math.trunc(Math.random() * 60) + 1;
  console.log(random);
  studyArr.push(random);

  labelStudyTime.textContent = `Study tims is ${random}`;
  const studyHours = studyArr.map((random) => random / 60);
  //   studyHours.reduce()
  console.log(studyHours);
  labelTotalTime.textContent = `Total study time is ${studyHours}`;
};

btnStudy.addEventListener("click", calcRandomStudyTime);
