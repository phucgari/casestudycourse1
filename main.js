
const delay = ms => new Promise(res => setTimeout(res, ms));

function howTo()
{
document.getElementById("hpcontent").innerHTML=`
Solo: Quan sát chỉ dẫn máy tính, lặp lại đúng thứ tự từng mũi tên để đi tiếp. Hãy xem giới hạn của bạn là bao nhiêu!
<br>
`}
//Duo: Đề bài do 2 người chơi tạo ra, Hãy xem ai là người chến thắng cuối cùng!
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
        <br>
        <input onclick="x.saveSetting()" type="button" value="Save changes">
    </fieldset>
</form>`
    document.getElementById("hpcontent").innerHTML=setting
}
function switchToSoloMode(){
    let solomode=`<div style="
    content: '';
    display: table;
    clear: both;
    margin: auto;
    width: 50%;
    border: solid green;
    padding: 10px;">
<div style="float: left;width: 50%;">
<div style="margin:auto;width:50%"><!--//up-->
<img src="button/uparrownor.png" id="1" >
</div>
<br>
<!--//left-->
<img src="button/leftarrownor.png" id="3" >
<!--//down-->
<img src="button/downarrownor.png" id="2" >
<!--//right-->
<img src="button/rightarrownor.png" id="4" >
</div>
<div style="float: left;width: 50%;">
<div style="margin:auto;width:50%">
<!--//up-->
<img src="button/uparrownor.png" id="c1" >
</div>
<br>
<!--//left-->
<img src="button/leftarrownor.png" id="c3" >
<!--//down-->
<img src="button/downarrownor.png" id="c2" >
<!--//right-->
<img src="button/rightarrownor.png" id="c4" >
<p id="result"></p>
<p id="count"></p>
<p id="score"></p>
</div>
</div>
`
    document.write(solomode)
    x.initSolo()
    document.onkeydown = checkKeyDown;
    let mousesound=new Audio("/sound/mousesound.mp3")
    function checkKeyDown(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            x.lightUp(1)
            mousesound.play()
        }
        else if (e.keyCode == '40') {
            x.lightUp(2)
            mousesound.play()
        }
        else if (e.keyCode == '37') {
            x.lightUp(3)
            mousesound.play()
        }
        else if (e.keyCode == '39') {
            x.lightUp(4)
            mousesound.play()
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
