// Time-based message

function calcTime(offset) {
  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = new Date(utc + 3600000 * offset);

  nd = nd.getUTCHours();

  return nd.toLocaleString();
}

var currenthour = calcTime("+0");

// For testing in console: console.log(currenthour);

var emailmessage = "You are <strong>OK</strong> to email me now.";

if (currenthour < 8 || currenthour > 21) {
  emailmessage = "I am asleep, sorry!";
} else if (currenthour > 9 || currenthour < 18) {
  emailmessage = "I am working, the answer might take longer";
}

var getheading = document.querySelector(".contact-me h2");
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);

var findLocation = document.getElementById("switch");

// The click to change code (footer)

var button = document.createElement("button");
button.setAttribute("class", "js-make-something-happen");
button.setAttribute("id", "make-something-happen");
button.textContent = "Change the footer";

findLocation.append(button);

var listenForInteraction = document.getElementById("make-something-happen");

function changeFooter() {
  document.documentElement.classList.toggle("js-modify-footer");
}

listenForInteraction.addEventListener("click", changeFooter);
