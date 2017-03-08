// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if (arguments[0] > arguments[1]){
    	return arguments[0]
    } else {
    	return arguments[1]
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (arguments[0] > arguments[1]){
    	if (arguments[0] > arguments[2]) {
    		return arguments[0]	
    	}
    	
    } else if (arguments[0] > arguments[2]){
    	if (arguments[0] > arguments[1]){
    	} return arguments[0]
    } else if (arguments[1] > arguments[2]) {
    	return arguments[1]
	} else if (arguments[1] > arguments[0]){
		return arguments[1]
	} else {
    	return arguments[2]
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var arr = ["a","e","i","o","u"]
    for(var i = 0; i < arr.length; i ++){
    	if (char == arr[i]) {
    		return true
    	}
    }
    return false
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var newStr = ""
    var vowel = ["a","e","i","o","u"]
    for(var i = 0; i < phrase.length; i ++){

    	if (vowel.indexOf(phrase.charAt(i) == -1)){
    		newStr += phrase.charAt(i) + "o" + phrase.charAt(i)
 	    	} else {
    		newStr += phrase.charAt(i)
    	}
    } return newStr
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    var newStr = ""
    for(var i = string.length - 1; i >= 0; i-- )
    	newStr += string[i]
	return newStr
}