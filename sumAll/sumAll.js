const sumAll = function(starting_no,ending_no) {
	let result=0;

	if(starting_no <= 0 || ending_no <=0)			//to check negative values
	{
		return "ERROR";
	}
	 if(typeof(starting_no)!=="number" || typeof(ending_no)!=="number")		//to check input other than number
	{
		return "ERROR";
	}
 if(starting_no > ending_no)		//if starting no is greater than ending no
	{
		for(let i=ending_no;i<=starting_no;i++)
		{
			result=result+i;
		}
		return result;
	}
	
else
	{
		for(let i=starting_no;i<=ending_no;i++)
		{
			result=result+i;
		}
		return result;
	}
	
}


module.exports = sumAll
