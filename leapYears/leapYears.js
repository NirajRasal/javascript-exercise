const leapYears = function(year) {
if(year % 100 ==0)			//identify centuary year
{
	if(year %400==0)
	{
		return true;
	}
	else
	{
		return false;
	}

}
else if(year % 4 == 0)		//for non-centuary year
	{
	return true;
	}
else
	{
	return false;
	}
}

module.exports = leapYears
