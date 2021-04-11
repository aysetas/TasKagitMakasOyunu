class TKM{

    constructor(){
        this.result=["Taş","Kağıt","Makas"];
    }
    generateMove(){
        var key=Math.floor(Math.random()*3);
        var hand=this.result[key];
        this.firstPick=hand;
        document.write("1. Oyuncu "+hand+" hareketini çekti<br>");
        return this;
    }
    generateMove2(){
        var key=Math.floor(Math.random()*3);
        var hand=this.result[key];
        this.secondPick=hand;
        document.write("2. Oyuncu "+hand+" hareketini çekti<br>");
        return this;
    }
    check(){
        if(this.firstPick===this.secondPick){
         return this.playAgain();
        }
        else if(this.firstPick==="Taş" && this.secondPick==="Makas"){
            return 1;
        }
        else if(this.firstPick==="Taş" && this.secondPick==="Kağıt"){
            return 2;
        }
        else if(this.firstPick==="Kağıt" && this.secondPick==="Taş"){
            return 1;
        }
        else if(this.firstPick==="Kağıt" && this.secondPick==="Makas"){
            return 2;
        }
       
        else if(this.firstPick==="Makas" && this.secondPick==="Kağıt"){
            return 1;
        }
        else if(this.firstPick==="Makas" && this.secondPick==="Taş"){
            return 2;
        }
        else{
            document.write('Makine Hata Verdi.');
        }
     
    }
    playAgain(){
        document.write('Oyun Tekrar Oynanıyor..<br>');
        var whoWin= this.generateMove().generateMove2().check();
        return whoWin;
    }
}
var tkm=new TKM();
var whoWin= tkm.generateMove().generateMove2().check();
document.write("Oyunu "+whoWin+"."+" oyuncu Kazandı..");