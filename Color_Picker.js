var backgroundColor = function() {
    var random = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = "#" + random;
    HexColor.innerHTML = "#" + random;
}

var backgroundColorImage = function() {
    document.body.style.backgroundImage = `linear-gradient(to right, ${document.getElementById("Color_1").value} 0%, 
    ${document.getElementById("Color_2").value} 51%, ${document.getElementById("Color_1").value} 100%)`;
    HexColor.innerHTML = document.getElementById("Color_1").value + "; " + document.getElementById("Color_2").value;
}

var CopyHexColor = function() {
    var Text = document.getElementById("HexColor");
    navigator.clipboard.writeText(Text.innerHTML);

    alert("Đã Copy!");
}

RanDomColor.addEventListener("click", backgroundColor);
ColorGradient.addEventListener("click", backgroundColorImage);
CopyHex.addEventListener("click", CopyHexColor);

backgroundColor();