function alternatingSums(a) {
    var resultArr = [0, 0];

    for (var i = 0; i <= a.length - 1; i++) {
        if (i % 2 == 0) {
            resultArr[0] += a[i];
        } else {
            resultArr[1] += a[i];
        }
    }

    return resultArr;
}


console.log(alternatingSums([60, 40, 55, 75, 64]));