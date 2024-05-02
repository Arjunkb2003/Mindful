const numbers = [1, 2, 3, 3, 4, 5, 5];
const uniqueValues = [];
for (let i = 0; i < numbers.length; i++) {
    if (!uniqueValues.includes(numbers[i])) {
        uniqueValues.push(numbers[i]);
    }
}
console.log(uniqueValues); 
