
	function replace(e){
		//the goal of this function is to reverse all alphabets but keep the special characters in position
		var l,arr,n,r; //we declare our variables 
		try{
		//To have an array,We split string by a trimmed space
		arr = e.split("");

		n = arr.length; //let's get the length of the array
		l =0; //we initialize the index by which we'll loop 
		r =n-1;
		//We run a while loop on the array hoping to move elements  that are alphabets from their first occurence to the back(Join them as a new element to the back of the array)
		while(l<r){
			//loop started
        if (!isLetter(arr[l])){
        	//at this point ,It means this index(element at this point is not an array) 
        	//so we add l+1 for our next loop and the element still remains in the same position
            l++;
        }else if(!isLetter(arr[r])){
        	//we check the last element of the array if it's alphabet and we proceed to reduce the length of the array so the loop can reduce
            r--;
        }else{
        	//Else swap arr[l] and arr[r]
            let tmp=arr[l];
            arr[l]=arr[r];
            arr[r]=tmp;
            l++;
            r--;
        }
    }
    return arr.join('');//we join the array back to string and wow we're done :)
	}
	catch(err){
		//Let's catch bugs
	console.log("This string cannot be reversed because "+err);
	}	
	}
	function isLetter(c) {
		//a function for checking if an element is a letter
  return c.toLowerCase() != c.toUpperCase();
}
