import urllib.request as request
import json

src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with request.urlopen(src) as response:  # （備註：後來是用留言中網友提供桃園政府API成功的）
    data = json.load(response)
clist = data["result"]["results"]
with open("data.txt", "w", encoding="utf-8") as file:
    for attraction in clist:
        urlTest = attraction["file"].split("http")
        file.write(attraction["stitle"]+"，"+attraction["longitude"] +
                   "，"+attraction["latitude"]+"，"+"http"+urlTest[1]+"\n")


# urlTest = ["http://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C1/D739/E412/F818/a5495477-8e8e-4280-a9d2-a3f51846a3f8.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C1/D902/E937/F483/95f4b9d3-c48f-4d62-bbcc-63931e42f537.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C1/D219/E545/F691/9e9d5163-7afc-416b-9e5a-fb36a73701f2.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C1/D486/E26/F394/cfb98f19-f3a0-4e96-a188-cca9744a3f18.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C0/D791/E787/F624/414eb618-995a-48ec-a74d-75dc3c91239d.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C1/D577/E884/F454/573cfd10-819a-4a14-8e14-24ad3924f32b.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C0/D91/E916/F626/d4a24771-4743-4ee1-8e04-72238ed95778.jpghttp://www.travel.taipei/d_upload_ttn/sceneadmin/image/A0/B0/C1/D372/E206/F389/71183250-fc63-45f7-829d-ee7d98b6e32b.jpg"]
# print(urlTest[0].split("http", ))
# str = "Line1-abcdef \nLine2-abc \nLine4-abcd"
# print(str.split())       # 以空格为分隔符，包含 \n
# print(str.split(' ', 1))  # 以空格为分隔符，分隔成两个
