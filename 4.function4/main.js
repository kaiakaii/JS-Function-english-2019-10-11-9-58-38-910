function countWords(message){
    // wirte your code here
    var result = message.match(/[\w\-]+/g).length;
    return result;
}