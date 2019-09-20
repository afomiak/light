document.getElementById('stop-Button').onclick = illuminateRed;
document.getElementById('slow-Button').onclick = illuminateYellow;
document.getElementById('go-Button').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  document.getElementById('stop-Light').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slow-Light').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('go-Light').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stop-Light').style.backgroundColor = "black";
  document.getElementById('slow-Light').style.backgroundColor = "black";
  document.getElementById('go-Light').style.backgroundColor = "black";
}