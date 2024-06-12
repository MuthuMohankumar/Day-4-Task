// funtions
// ananymous function

// odd numbers in array
/*
var a= function (arr){
    var result=[]
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));



// String caps

var a =function(str){
let result = []
let arr = str.split(" ")
for (let i=0; i<arr.length; i++) {
    result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))

}
return result.join(" ");
}
console.log(a("mohan kumar muthu kumaran odugathur m l a"))

// Sum of Array

var a = function(arr){
    let s=0;
    for(let i=0; i<arr.length; i++){
        s=s+arr[i];

    }
    return s
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

// Prime numbers

var isPrime = function (num){
    for(let i=2; i<num; i++){
        if(num%i === 0){
            return false
        }
    }
    return true;
}
let arr=[2,3,4,5,6,7,8,9,10]
for(let i=0; i<arr.length; i++){
    if(isPrime(arr[i])){
        console.log(arr[i]);
    }
}

// Palindrome

let a=function (arr){
    for(let i=0; i<arr.length; i++){
        if (arr[i].split('').reverse().join('') === arr[i])
        {
            console.log(`Palindrome: ${arr[i]}`)
        }
        else{
            console.log(`not a Palindrome: ${arr[i]}`);
        }

    }
}

console.log(a(["dad","mom","madam", "mohan", "kumar","refer"]))

// Return median of two sorted arrays of the same size.

let y=function(){
    let a=[1,3,6,4,2,5]
    let b=[8,7,10,11,9,12]

    let c=a.sort()
    let d=b.sort()
    let n=c.length
    const e=c[n-1]+d[0]/2

    return e;
}

console.log(y());

// Remove duplicates from an array


let y=function(arr){
    const uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
y([1,2,3,4,5,6,5,43,2,1])



// Rotate an array by k times

let y=function(arr,k){
    for(let i=0; i<k; i++){
        arr.unshift(arr.pop())
    }
    console.log(arr);
}
y([1,2,3,4,5],3)
*/

/*
//IIFE function

(function (arr){
    
    var result=[]
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i])
        }
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);


// String caps

(function(str){
let result = []
let arr = str.split(" ")
for (let i=0; i<arr.length; i++) {
    result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))

}
return console.log(result.join(" "));
})("mohan kumar balaji kumar")


// sum of arrays

(function(arr){
    let s=0;
    for(let i=0; i<arr.length; i++){
        s=s+arr[i];

    }
    console.log(s);
})([1,2,3,4,5,6,7,8,9,10]);


// prime numbers

(function(arr){
    var isPrime = function (num){
        for(let i=2; i<num; i++){
            if(num%i === 0){
                return false
            }
        }
        return true;
    }
    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i])){
            console.log(arr[i]);
        }
    }
   
    
})([2,3,4,5,6,7,8,9,10]);

// Palindrome

(function(arr){
    for(let i=0; i<arr.length; i++){
        if (arr[i].split('').reverse().join('') === arr[i])
        {
            console.log(`Palindrome: ${arr[i]}`)
        }
        else{
            console.log(`not a Palindrome: ${arr[i]}`);
        }

    }
})(["dad","mom","madam", "mohan", "kumar","refer"]);

//Return median of two sorted arrays of the same size.

(function(){
    let a=[1,3,6,4,92,5]
    let b=[8,7,10,11,9,12]

    let c=a.sort()
    let d=b.sort()
    let n=c.length
    const e=c[n-1]+d[0]/2

    console.log(e);
})()

// Remove duplicates from an array


(function(arr){
    const uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
})([1,2,3,4,5,6,5,43,2,1])

// Rotate an array by k times

(function(arr,k){
    for(let i=0; i<k; i++){
        arr.unshift(arr.pop())
    }
    console.log(arr);
}
([1,2,3,4,5],3))
*/

/*

//Arrow function

var a=(arr)=>{
    console.log("Given Array: "+arr);
    var result=[]
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i])
        }
    }
    return result
}
console.log("Odd numbers: " +a([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));


// Convert all the strings to title caps in a string array

var a=(str)=>{
    let result = []
    let arr = str.split(" ")
    for (let i=0; i<arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
}
    return result;
}

console.log(a("mohan kumar muthu kumaran odugathur m l a"));

// Sum of all numbers in an array

var a=(arr)=>{
    let s=0;
    for(let i=0; i<arr.length; i++){
        s=s+arr[i];

    }
    return s
}
console.log(a([1,2,3,4,5]));

// Return all the prime numbers in an array

let a=(arr)=>{
    var isPrime = (num)=>{
        for(let i=2; i<num; i++){
            if(num%i === 0){
                return false
            }
        }
        return true;
    }
    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i])){
            console.log(arr[i]);
        }
    }
}

a([2,3,4,5,6,7,8,9,10]);


//Return all the palindromes in an array

let a=(arr)=>{
    for(let i=0; i<arr.length; i++){
        if (arr[i].split('').reverse().join('') === arr[i])
        {
            console.log(`Palindrome: ${arr[i]}`)
        }
        else{
            console.log(`not a Palindrome: ${arr[i]}`);
        }

    }
}

a(["dad","mom","madam", "mohan", "kumar","refer"]);
*/