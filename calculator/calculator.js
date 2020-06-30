function add (first_no,second_no) {
	var result=first_no+second_no;
	return result;
}

function subtract (first_no,second_no) {
	var result=first_no-second_no
	return result;
	
}

function sum(input){
             
 if (toString.call(input) !== "[object Array]")		//from w3resources.com
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }

function multiply (input) {

 if (toString.call(input) !== "[object Array]")		//from w3resources.com
    return false;
      
            var total =  1;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total *= Number(input[i]);
               }
             return total;
            }


function power(base,power) {
	/*var result=base;			//this logic also works
	for(var i=1; i<power; i++)
	{
		var result=result*base;
		
	}
	return result;*/
	let output=base ** power;
	return output;
}

function factorial(no) {
	var result=no;
	if(no == 0)
	{
		return 1;
	}
	var temp=no-1;
	for(var i=temp;i>0;i--)
	{
		result=result*i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}