let randNum = Math.floor(Math.random()* 100);
a=0

function GN() {
    const Guess_Number = document.getElementById('G_N').value;
    if (randNum > Guess_Number) {
        console.log("น้อยกว่า")
        alert("น้อยกว่า")
    }else if (randNum < Guess_Number) {
        console.log("มากกว่า")
        alert("มากกว่า")
    }else if (randNum == Guess_Number) {
        console.log("ถูกต้อง")
        alert("ถูกต้อง ค่าที่ถูกคือ :"+randNum+" คุณทายไปทั้งหมด :"+a+" ครั้ง")
    }
a= a+1
}