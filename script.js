const count = document.querySelector(".count");

setInterval(function () {
  count.innerHTML = count.innerHTML.replace(/\▶️/g, "◾️");
  count.innerHTML += "▶️ ";
}, 1000);
