var slideshowArr = new Array();
slideshowArr.push("0820");
slideshowArr.push("1712");
slideshowArr.push("2331");
slideshowArr.push("7484");
slideshowArr.push("8351");
slideshowArr.push("8989");
slideshowArr.push("9220");
slideshowArr.push("9330");
slideshowArr.push("9423");
slideshowArr.push("9870");

/*
This function will return an array of size num that contains
num number of items from the original array.
*/
function randomGetFromDataArray(array, num) {
    oArrSize = array.length; // original array size
    var nArr = new Array(); // new array to be returned

    num = oArrSize; // set num to always return as many objects array has

    // always get random for first index
    nArr[0] = Math.floor(Math.random() * oArrSize);
    for (i = 1; i < num; i++) {
        repeat = false; // bool to check if there are any repeats
        nArr[i] = Math.floor(Math.random() * oArrSize);
        for (j = 0; j < (nArr.length - 1); j++) {
            if (nArr[i] == nArr[j]) {
                repeat = true;
            }
        }

        while (repeat) {
            repeat = false;
            nArr[i] = Math.floor(Math.random() * oArrSize);
            for (j = 0; j < (nArr.length - 1); j++) {
                if (nArr[i] == nArr[j]) {
                    repeat = true;
                }
            }
        }
    }

    for (i = 0; i < nArr.length; i++) {
        oArrIndex = nArr[i];
        nArr[i] = array[oArrIndex];
    }

    return nArr;
}

function getRandomizedSlideshowImages() {
    var temp = randomGetFromDataArray(slideshowArr, 31);
    var arr = new Array();

    for (i = 0; i < temp.length; i++) {
        var s = "./img/slideshow/IMG_" + temp[i] + ".jpg";
        arr.push(s);
    }

    //console.log(arr);
    return arr;
}
