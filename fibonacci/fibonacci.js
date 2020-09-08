/*const fibonacci = function(no) {
let i=1;
let j=1;

	if(typeof no == "string")
	{
		no=no.split("");
	}
		if(no < 0)
		{
			return "OOPS";
		}
	for(i=1;i<no;)
	{
		for(j=1;j<no;)
		{
			let k=i+j;
			i=j;
			j=k
		}

	}
return k;

}*/


const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count == 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

module.exports = fibonacci
