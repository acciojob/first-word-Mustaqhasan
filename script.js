function firstWord(s) {
  // your code here
	let str=s.trim();
	let res="";
	for(let i=0; i<str.length; i++){
		if(str[i]==" "){
			return res;
		}else{
		res=res+str[i];
			
		}
	}
	return res;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
