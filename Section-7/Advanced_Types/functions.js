function getLength(val) {
    if (typeof val === 'string') {
        var numberOfWords = val.split(' ').length;
        return "".concat(numberOfWords, " words");
    }
    //If it is an array
    return val.length;
}
console.log(getLength('does this work?'));
console.log(getLength(['Sports', 'Cookies']));
