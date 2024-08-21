let word;
let state;

function reverseString(j) {
    var newString = "";
    for (var i = j.length - 1; i >= 0; i--) {
        newString += j[i];
    }
    return newString;
}

word = prompt('Insert the phrase or word:');
let newWord = word.replace(/ /g, "");
console.log(newWord);
console.log(reverseString(newWord));

if (newWord == reverseString(newWord)){
    console.log('The string '+newWord+ ' is a palindrome.');

}else{
    console.log('The string '+newWord+ ' is not a palindrome.')
}

