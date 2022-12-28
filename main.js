
const delay = ms => new Promise(res => setTimeout(res, ms));
document.onkeydown = checkKeyDown;
function checkKeyDown(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        x.lightUp(1,"red")
    }
    else if (e.keyCode == '40') {
        x.lightUp(2, "blue")
    }
    else if (e.keyCode == '37') {
        x.lightUp(3, "green")
    }
    else if (e.keyCode == '39') {
        x.lightUp(4, "yellow")
    }

}
document.onkeyup = checkKeyUP;
function checkKeyUP(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        x.lightDown(1)
        x.check(1)
    }
    else if (e.keyCode == '40') {
        x.lightDown(2)
        x.check(2)
    }
    else if (e.keyCode == '37') {
        x.lightDown(3)
        x.check(3)
    }
    else if (e.keyCode == '39') {
        x.lightDown(4)
        x.check(4)
    }

}
function howTo()
{
document.getElementById("howTo").innerHTML="Quan sát chỉ dẫn máy tính, lặp lại đúng thứ tự từng mũi tên để đi tiếp. Hãy xem giới hạn của bạn là bao nhiêu!"
}