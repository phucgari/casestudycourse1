class GameManager{
    constructor(keyset){
        this.data=[]
        this.count=0
        this.gameState=false
        this.keySet=keyset
        this.delay=1000
    }
    async visualize(){
        await delay(this.delay)
        for(let i=0;i<this.data.length;i++){
            this.lightUp(this.keySet+this.data[i],"grey")
            await delay(this.delay)
            this.lightDown(this.keySet+this.data[i])
            await delay(this.delay)
        }
        x.gameState=true
        document.getElementById("result").innerHTML="Bạn đã nhớ chưa? Đây là lượt của bạn"
    }
    lightUp(keyid,color){
        document.getElementById(keyid).style.backgroundColor=color
    }
    lightDown(keyid){
        document.getElementById(keyid).style.backgroundColor="white"
    }
    check(num){
        if(this.gameState==false){
            return
        }
        if(num==this.data[this.count]){
            this.count++
            document.getElementById("result").innerHTML="đúng r, tiếp tục đi"
        }else{
            document.getElementById("result").innerHTML="sai rồi"
            this.count=0
        }
        if(this.count==this.data.length){
            document.getElementById("result").innerHTML="Đến lượt máy. bạn quan sát cho kĩ nhé"
            this.gameState=false
            this.generateRandomKey()
            this.count=0
            this.visualize()
        }
    }
    generateRandomKey(){
        let key=Math.floor(Math.random()*4)+1
        console.log(key)
        this.data.push(key)
    }
}
let x=new GameManager("c")
x.visualize()

