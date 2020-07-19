const reverseString = function(word) {
var split=word.split("");		//to convert string to array since we cannot reverse string directly
var reverse=split.reverse();	//to reverse the array
var join=reverse.join('');		//to convert back reversed array to string
return join;
}

module.exports = reverseString
