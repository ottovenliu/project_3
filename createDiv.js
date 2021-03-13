
var parent = document.getElementById('contentArea');
console.log(parent)
for (var i = 0; i < lessShow; i++) {
    var newDiv = document.createElement('div');
    var textBox = document.createElement('div')
    var textNode = document.createTextNode(items[i][0]);
    // var imageSources = items[i][1];
    // var img = document.createElement("img");
    textBox.appendChild(textNode);
    newDiv.appendChild(textBox)
    newDiv.setAttribute("class", "item")
    newDiv.setAttribute("id", `item_${i}`)
    // img.src = imageSources;
    // document.getElementById(`item_${i}`).appendChild(img)
    // append the new div to the parent

    // newDiv.appendChild(textNode);
    parent.appendChild(newDiv);
}


