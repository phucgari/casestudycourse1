class Solo {
    constructor(){
        this.data=[]
        this.count=0
        this.gameState=false
        this.delay=1000
        this.comcolor="grey"
        this.uparrowcor="red"
        this.downarrowcor="blue"
        this.leftarrowcor="green"
        this.rightarrowcor="yellow"
    }
    async visualize(){
        await delay(this.delay)
        for(let i=0;i<this.data.length;i++){
            this.lightUp("c" +this.data[i])
            let comsound=new Audio("sound/computersound.mp3")
            await comsound.play()
            await delay(this.delay)
            this.lightDown("c" +this.data[i])
            await delay(this.delay)
        }
        x.gameState=true
        document.getElementById("result").innerHTML="Bạn đã nhớ chưa? Đây là lượt của bạn"
    }
    lightUp(keyid){
        switch (keyid){
            case 1 :
                document.getElementById(keyid).style.backgroundColor=this.uparrowcor
                break
            case 2 :
                document.getElementById(keyid).style.backgroundColor=this.downarrowcor
                break
            case 3 :
                document.getElementById(keyid).style.backgroundColor=this.leftarrowcor
                break
            case 4 :
                document.getElementById(keyid).style.backgroundColor=this.rightarrowcor
                break
            default:
                document.getElementById(keyid).style.backgroundColor=this.comcolor
        }
    }
    lightDown(keyid){
        document.getElementById(keyid).style.backgroundColor="white"
    }
    async check(num){
        if(this.gameState==false){
            return
        }
        if(num==this.data[this.count]){
            this.count++
            document.getElementById("result").innerHTML="đúng r, tiếp tục đi"
        }else{
            document.getElementById("result").innerHTML="sai rồi"
            let fail=new Audio("/sound/wrongsound.mp3")
            fail.play()
            this.count=0

        }
        if(this.count==this.data.length){
            document.getElementById("result").innerHTML="Đến lượt máy. bạn quan sát cho kĩ nhé"
            let win=new Audio("/sound/rightsound.mp3")
            win.play()
            alert("Congrat! Your max combo is now "+ this.data.length)
            await delay(2000)
            this.gameState=false
            this.generateRandomKey()
            this.count=0
            this.visualize()
        }
        this.visualCount()
    }
    generateRandomKey(){
        let key=Math.floor(Math.random()*4)+1
        console.log(key)
        this.data.push(key)
        this.visualScore()
    }
    visualCount(){
        document.getElementById("count").innerHTML="Bộ đếm "+this.count
    }
    initSolo(){
        this.generateRandomKey()
        this.visualCount()
        this.visualize()
    }
    visualScore(){
        document.getElementById("score").innerHTML="Độ dài combo hiện tại: "+this.data.length
    }
    setDelay(microsec){
        this.delay=microsec
    }
    setColor(comcorlor,up,down,left,right){
        this.comcolor=comcorlor
        this.uparrowcor=up
        this.downarrowcor=down
        this.leftarrowcor=left
        this.rightarrowcor=right
    }
    saveSetting(){
        let comcorlor=document.getElementById("comcorlor").value
        let delay=document.getElementById("settingSpeed").value
        let uparrowcor=document.getElementById("uparrowcorlor").value
        let downarrowcor=document.getElementById("downarrowcorlor").value
        let leftarrowcor=document.getElementById("leftarrowcorlor").value
        let rightarrowcor=document.getElementById("rightarrowcorlor").value
        this.setDelay(delay)
        this.setColor(comcorlor,uparrowcor,downarrowcor,leftarrowcor,rightarrowcor)
        console.log (comcorlor+delay+uparrowcor+downarrowcor+leftarrowcor+rightarrowcor)
    }
}
let x=new Solo("c")


