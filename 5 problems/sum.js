const arra = [1,2,3,4,5]
var sum =0;
function add(arra){
    for (let i=0;i<arra.length;i++){
        sum += arra[i];
    }
    return sum;
}
console.debug(add(arra));