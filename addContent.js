window.onload = function addImg() {
    for (i = 0; i < lessShow; i++) {
        var imageSources = items[i][1];
        var img = document.createElement("img");
        var boxConten = document.getElementById(`item_${i}`)
        var imgBox = document.createElement('div')
        var textBox = document.createElement('div')
        var textNode = document.createTextNode(items[i][0]);
        boxConten.style.display = "flex";
        boxConten.style.justifyContent = "center";
        boxConten.style.alignItems = "center";
        boxConten.style.flexDirection = "column";
        imgBox.style.maxWidth = "90%";
        imgBox.style.width = "270";
        imgBox.style.maxHeight = "80%";
        imgBox.style.height = "240px";
        imgBox.style.display = "flex";
        imgBox.style.justifyContent = "center";
        imgBox.style.alignItems = "center";
        textBox.style.maxHeight = "20%";
        textBox.style.height = "60px";
        img.style.flex = "none";

        img.style.width = "auto";
        img.style.height = "auto";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%"

        img.src = imageSources;
        imgBox.setAttribute("id", `imgBox_${i}`)
        textBox.appendChild(textNode);


        imgBox.appendChild(img)
        boxConten.appendChild(imgBox)

        // textBox.appendChild(textNode);
        boxConten.appendChild(textBox)
    };
}