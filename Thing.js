var arr = [1,2,3,4,5,6,7,8,9]

// forEach
arr.forEach(function(value){
	console.log(value)
})

// filter
var newArr = arr.filter(function(value){
	var isOdd = value % 2 == 1
	return isOdd
})

// map 
var newArr = arr.map(function(value){
	return {
		count: value
	}
})

// reduce
var sum = arr.reduce(function(a,b){
	return a + b
})

// a+b=*+b=*+b=*+b
// 1+2=3+3=6+4=10+5=15+


// different types
var sum = arr.reduce(function(a,b){
	if(typeof a == "number") {
		return {
			sum: a + b
	} else {
		return {
			sum: a.sum + b
		}
	}
})

var sum = arr.reduce(function(a,b){
	return {
		sum: a.sum +
	}
}, {sum:0})


var largest = numbers.reduce(function(a,b){
	return a > b ? a : b
})

