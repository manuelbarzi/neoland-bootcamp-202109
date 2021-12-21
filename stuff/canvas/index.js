function hideModal() {
    document.getElementById("modal").classList.add("panel--off");
}

function showModal() {
    document.getElementById("modal").classList.remove("panel--off");
}


var btn = document.getElementById("showmodal");
btn.onclick = showModal;


var modal = document.getElementById("modal");
var buttons = modal.getElementsByTagName("button");
var close = buttons[0];
close.onclick = hideModal;