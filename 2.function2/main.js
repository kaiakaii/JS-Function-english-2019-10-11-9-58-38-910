function palindrome(message){
    var result = message.split("").reverse().join("");
    if (result == message) {
        return true
    } else{
        return false
    }
}
document.write(palindrome('hello'));
document.write(palindrome('abcba'));