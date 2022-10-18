// Bài 2

function numberOne (n) {
    if(n === 0){
        return 0;
    }
    let max = 0;
    while (n > 0) {
        let tempt = n % 10;
        n = n / 10;
        if(tempt > max){
            max = tempt;
        }
    }
    return max;
}

let n = parseInt(prompt("Nhập số: "));

console.log(`Số lớn nhất là: ${numberOne(n)}`);