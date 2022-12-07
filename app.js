console.log("name");

var x = Math.random() * 100;
x = Math.floor(x); 
console.log(x)
        console.log(num);
    
for(var i = 1; i<= 100; i++){
    var num = Number.parseInt(prompt("guess a number"));
    const input = () => {
        num = prompt("guess a number");
        num = Number.parseInt(num);
    }
    if(num == x){
        console.log(`congradulations you won the number is ${x} You took ${i} chances`);
        exit;
    }
    else if(num < x){
        console.log("number is lesser");    
        input();
    }
    else{
        console.log("number is larger");
        input();
    }
}