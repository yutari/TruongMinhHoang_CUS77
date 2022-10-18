// Bài 1

let arr =[ 7, 2, 6, 7, 4, 9, 8]

function Laplai(arr,x) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x){
        count ++;
        }
    }
    console.log( "Phần tử " +  x  + " xuất hiện " + count +  " lần");
}
let count1 = 0
for (let i = 0; i < arr.length; i++) {
    let c = true;
    for (let k = i + 1; k < arr.length; k++) {
        if (arr[i] !== arr[k]){
            c = true;
        }
        else{
            c = false;
            break;
        }
    }
    if (c == true){
        count1 ++;
        Laplai(arr,arr[i]);
    }
}
console.log("Có " + count1 + " phần tử khác nhau");



