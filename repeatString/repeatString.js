const repeatString = function(word,times) {
	var string  = "";
	if (times < 0)
	{
		return "ERROR!";
	}
	for (var i=0; i<times; i++)
	{
		string=string+word;
	}
	return string;

}

module.exports = repeatString
