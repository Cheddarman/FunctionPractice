// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function findMax(numbers) {
	var numbers = [1,12,4,18,9,7,11,3,101,5,6]
    var max = -Infinity
    for(i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}


var largest = numbers.reduce(function(a,b){
	return a > b ? a : b
})

// ---------------------------
// 2. Find longest string
// ---------------------------

var longest = srtings.reduce(function(value){
	return a.length > b.length ? a : b
})


// ---------------------------
// 3. Find even numbers
// ---------------------------

var evens = numbers.filter(function(value){
	return value % 2 === 0
})


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var evens = numbers.filter(function(value){
	return value % 2 === 1
})

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var words = strings.filter(function(value){
	return value.indexOf('is') !== -1
})


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var newArr = numbers.concat(strings)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var jsteachers = instructors.filter(function(value){
	return value.teaches === 'Javascript'
})






.sort(function(a,b){
	return 1,0,-1
})