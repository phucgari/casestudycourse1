
const delay = ms => new Promise(res => setTimeout(res, ms));

function howTo()
{
document.getElementById("hpcontent").innerHTML="Quan sát chỉ dẫn máy tính, lặp lại đúng thứ tự từng mũi tên để đi tiếp. Hãy xem giới hạn của bạn là bao nhiêu!"
}
function setting(){
    let setting=`<form>
    <fieldset>
        <legend>Setting: </legend>
        <p>speed</p>
        <input type="number" id="settingSpeed" value="${x.delay}">
        <p>button corlor</p>
        up arrow
        <select id="uparrowcorlor">
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="grey">grey</option>
        </select>
        <br>
        down arrow
        <select id="downarrowcorlor">
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="grey">grey</option>
        </select>
        <br>
        left arrow
        <select id="leftarrowcorlor">
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="grey">grey</option>
        </select>
        <br>
        right arrow
        <select id="rightarrowcorlor">
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="grey">grey</option>
        </select>
        <br>
        computer corlor
        <select id="comcorlor">
            <option value="grey">grey</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <p onclick="x.saveSetting()">save changes</p>
    </fieldset>
</form>`
    document.getElementById("hpcontent").innerHTML=setting
}
function switchToSoloMode(){
    let solomode=`
<!--//up-->
<button id="c1">&#8593</button>
<!--//down-->
<button id="c2">&#8595</button>
<!--//left-->
<button id="c3">&#8592</button>
<!--//right-->
<button id="c4">&#8594</button>
<br>
<!--//up-->
<button id="1">&#8593</button>
<!--//down-->
<button id="2">&#8595</button>
<!--//left-->
<button id="3">&#8592</button>
<!--//right-->
<button id="4">&#8594</button>
<p id="result"></p>
<p id="count"></p>
<p id="score"></p>`
    document.write(solomode)
    x.init()

    document.onkeydown = checkKeyDown;
    function checkKeyDown(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            x.lightUp(1)
        }
        else if (e.keyCode == '40') {
            x.lightUp(2)
        }
        else if (e.keyCode == '37') {
            x.lightUp(3)
        }
        else if (e.keyCode == '39') {
            x.lightUp(4)
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
}