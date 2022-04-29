/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generarexcusa();
  console.log("Hello Rigo from the console!");
};
let generarexcusa = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    " when I finished",

    "during my lunch",
    "while I was praying"
  ];
  let num1 = Math.floor(Math.random() * who.length);
  let num2 = Math.floor(Math.random() * what.length);
  let num3 = Math.floor(Math.random() * when.length);
  console.log(num1);
  return who[num1] + " " + what[num2] + " " + when[num3];
};
