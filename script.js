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

*/

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

