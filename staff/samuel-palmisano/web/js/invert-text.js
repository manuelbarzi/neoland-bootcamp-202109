/*
function invertText(txt) {
    var revert = ""
    var copyTxt = txt

    for (var i = 0; i < copyTxt.length; i++) {
        var position = copyTxt.length - 1 - i
        revert += copyTxt[position]
    }

    return revert
}

function invertText(txt) {
    var revert = ""
    var copyTxt = txt

    for (var i = copyTxt.length - 1; i >= 0; i--) {
        revert += copyTxt[i]
    }

    return revert
}
*/

function invertText(txt) {
    var copyTxt = txt

    return copyTxt.split("").reverse().join("")

}

