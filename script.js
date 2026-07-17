let str = "";

function checkSentence(str) {
    let badWords = ["dumb", "silly", "stupid",];

    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        if (badWords.includes(strArr[i])) {
            strArr[i] = "*".repeat(strArr[i].length)
        }
    }

    return strArr.join(" ")



}
console.log(checkSentence("you are silly "))  