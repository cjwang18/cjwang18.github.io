var slideshowArr = new Array();
slideshowArr.push("0156");
slideshowArr.push("0684");
slideshowArr.push("1362");
slideshowArr.push("1373");
slideshowArr.push("1417");
slideshowArr.push("1442");
slideshowArr.push("5912");
slideshowArr.push("5980");
slideshowArr.push("6761");
slideshowArr.push("6800");
slideshowArr.push("6939");
slideshowArr.push("7484");
slideshowArr.push("7673");
slideshowArr.push("7934");
slideshowArr.push("8177");
slideshowArr.push("8977");
slideshowArr.push("8989");
slideshowArr.push("9055");
slideshowArr.push("9113");
slideshowArr.push("9157");
slideshowArr.push("9220");
slideshowArr.push("9292");
slideshowArr.push("9330");
slideshowArr.push("9400");
slideshowArr.push("9464");
slideshowArr.push("9522");
slideshowArr.push("9886");

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
