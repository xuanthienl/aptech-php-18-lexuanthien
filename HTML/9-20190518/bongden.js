var bongden = document.getElementById("image");
console.log(bongden.src);

function battatbongden() {
if (bongden.src == "http://127.0.0.1:5500/HTML/9-20190518/tatden.png") {
    bongden.src = "tatden.png"; }
    else {
    bongden.src = "bat.png" }

}
