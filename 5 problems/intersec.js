const arr1=[1, 2,3,4]
const arr2 = [3,4,5,6]
function intersec(arr1, arr2) {
    const intersect = [];
    for (let i = 0; i < arr1.length; i++) {
        const currentElement = arr1[i];
        if (arr2.includes(currentElement)) {
            intersect.push(currentElement);
        }
    }
    return intersect;
}
console.debug(intersec(arr1,arr2))
