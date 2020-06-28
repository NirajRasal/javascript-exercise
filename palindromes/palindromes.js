const palindromes = function(input) {
var regex=/[^A-Za-z0–9]/g;  						//regex for puntuation

var makelowercase=input.toLowerCase();				//to make all alphabets lowecase
var removespace=makelowercase.trim();				//to remove spaces from string
var removepuntuation=removespace.replace(regex,'');	//to remove puntuation from string

var inputstring=removepuntuation;

var newstring="";
for(var i=inputstring.length-1;i>=0;i--)			//reverse string
	{
		newstring=newstring+inputstring[i];
	}
	
	if(newstring == inputstring)					//compare string
	{
		return true;
	}
	else
	{
		return false;
	}
}

module.exports = palindromes
