class Duo{
    constructor(){
        this.data=[]
        this.count=0
        this.gameState=0
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
            await delay(this.delay)
            this.lightDown("c" +this.data[i])
            await delay(this.delay)
        }
        x.gameState=1
        document.getElementById("result").innerHTML="2 bạn quan sát máy tính lặp lại đề bài"
    }
    lightUp(keyid){
        switch (keyid){
            case p11 :
            case p21 :
                document.getElementById(keyid).style.backgroundColor=this.uparrowcor
                break
            case p12 :
            case p22 :
                document.getElementById(keyid).style.backgroundColor=this.downarrowcor
                break
            case p13 :
            case p23 :
                document.getElementById(keyid).style.backgroundColor=this.leftarrowcor
                break
            case p14 :
            case p24 :
                document.getElementById(keyid).style.backgroundColor=this.rightarrowcor
                break
            default:
                document.getElementById(keyid).style.backgroundColor=this.comcolor
        }
    }
    lightDown(keyid){
        document.getElementById(keyid).style.backgroundColor="white"
    }
    check(num){
        if(this.gameState==0){
            return
        }
        if(num==this.data[this.count]){
            this.count++
            document.getElementById("result").innerHTML="đúng r, tiếp tục đi"
        }else{
            document.getElementById("result").innerHTML="sai rồi. thua cuộc"
            let fail=new Audio("/sound/wrongsound.mp3")
            fail.play()
            this.count=0

        }
        if(this.count==this.data.length){
            document.getElementById("result").innerHTML="Đến lượt máy. bạn quan sát cho kĩ nhé"
            let win=new Audio("/sound/rightsound.mp3")
            win.play()
            this.gameState=false
            this.generateRandomKey()
            this.count=0
            this.visualize()
        }
        this.visualCount()
    }
}