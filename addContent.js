window.onload = function addImg() {
    for (i = 0; i < lessShow; i++) {
        var imageSources = items[i][1];
        var img = document.createElement("img");
        img.style.maxWidth = "100%";
        img.style.maxHeight = "260px"
        // img.style.height = "100%";
        img.src = imageSources;
        document.getElementById(`item_${i}`).appendChild(img)
    };
}