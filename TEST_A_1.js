function allLongestStringsV1(inputArray) {
    inputArray = inputArray.sort().reverse();;
    var resultArr = [];
    var maxLength = inputArray[0].length;

    inputArray.forEach(element => {
        if (element.length == maxLength) {
            resultArr.push(element);
        }
    });

    return resultArr;
}


function allLongestStringsV2(inputArray) {
    var resultArr = [];
    var maxLength = 0;

    inputArray.forEach(element => {
        if (element.length > maxLength) {
            maxLength = element.length;
        }
    });

    inputArray.forEach(element => {
        if (element.length == maxLength) {
            resultArr.push(element);
        }
    });

    return resultArr;
}

console.log(allLongestStringsV1(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]));
console.log(allLongestStringsV2(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]));