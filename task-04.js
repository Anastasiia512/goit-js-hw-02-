"use strict";

const formatString = function(string) {
  string.split("");
  if (string.split("").length <= 40) {
    return string;
  }
  if (string.split("").length > 40) {
    let arrPerLetter = string.split("").slice(0, 40);
    arrPerLetter.push("...");
    let newString = arrPerLetter.join("");
    return newString;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
