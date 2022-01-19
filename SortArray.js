var SortArray = function(array) {
    var newArray = array.sort(function(a, b) { return b - a });

    console.log(newArray[1]);
}

SortArray([40, 100, 200, 1, 5, 25, 10]);