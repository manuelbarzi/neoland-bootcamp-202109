function startsWith(str = "", pattern, index = 0) {
    var bool = false;
    var position = (index < 0) ? str.length - index : index;
    position = (position < 0) ? str.length : position;

    var substr = "";
    for (let j = 0; j < pattern.length; j++) substr += str[position + j];
    bool = (substr === pattern);

    return bool;
}