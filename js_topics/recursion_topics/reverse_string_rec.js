let num = 123456789;

function reverse(num){
    if(Math.floor(num/10) < 9) return num;
    return String(num%10) + String(reverse(Math.floor(num/10)))
}

console.log(reverse(num));