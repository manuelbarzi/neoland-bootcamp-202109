function charAt(str, position = 0) {
var res = ''
if (position >= 0 && position <= str.length -1){
    res = str[position]
}
return res
}