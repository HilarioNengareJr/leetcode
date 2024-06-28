
/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters,and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
", 13
Input:"Mr John Smith
Output:"Mr%20John%20Smith"
*/

function urlify(str, len){
    str = str.slice(0, len); // ensure true length of the string and ignoring trailing spaces
    str = str.replaceAll(' ', '%20');
    return str;    
}

console.log(urlify('Mr John Smith   ', 13));
