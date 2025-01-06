function customIndex(text, char) {
    let index = -1;
    if (text == "" || char == "") {
        let err = new Error();
        err.message = 'Text is Empty';
        throw err;
    }

    if ((typeof text) != 'string' || (typeof char) != 'string' ) {
        let err = new Error();
        err.message = 'Argument is not a string';
        throw err;;
    }

    try {
        let currentChar = "";
        for (let i = 0; i < text.length; i++) {
            currentChar = text[i];
            if (currentChar == char) {
                index = i;
                break;
            }
        }

        return index;
    } catch (error) {
        throw error.message;
    }
}

try {
    index = customIndex("yossidudai", "u");
    console.log(index);
} catch (error) {
    console.log(error.message);
}
