var req = new XMLHttpRequest();
req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json", false)
req.onload = function () {
    alert("已成功聯繫伺服器");
};
req.send(null);

var contextArea = JSON.parse(req.responseText)
var items = []
for (i = 0; i < contextArea["result"]["results"].length; i++) {
    var item = []
    var file = contextArea["result"]["results"][i]["file"].split("http://") // 需要更換疊代值//測試可直接更換
    item.push(contextArea["result"]["results"][i]["stitle"]) //需要更換疊代值//測試可直接更換
    var img = "http://" + file[1]
    item.push(img)
    items.push(item)
}
console.log(items)
var lessShow = (items.length) * 0.2
console.log(lessShow)









