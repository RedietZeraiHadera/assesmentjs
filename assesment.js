// 1. Write a function that takes in a string and returns it when reversed

function reverse(food){
    for(let i=0; i>food.length; i--){
        console.log(food[i])
    }
   
}
let food = "eating"
let reverse1 = reverse(food);
console.log(reverse1);




// 2. Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23

function divide(arr){
    if( arr.length<=1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return sorted(divide(left),divide(right))

}
function sorted(left,right){
let empty = [];
while(left.length&&right.length){
    if(left[0]<right[0])
    empty.push(left.shift());

else{
    empty.push(right.shift());
}
}
return [...empty,...left,...right];
}
let arr = [2,8,0,23,5,45,76];
console.log(divide(arr));


function binary(arr,target){
    let left = 0;
    let right = arr.length-1;
    while (left <= right){
        let middle = Math.floor((left+right)/2);
        if (arr[middle]==target){
        return middle
    }
    else if (arr[middle]>target){
        right=middle-1;

    }
    else(arr[middle]<target);{
        left = middle+1
    }
}

return null;
    }
      arr = [2,8,0,23,5,45,76];

    let target = 23;
    
    console.log(binary(arr,target))
    //3. Given years between 2000 and 2023, console all the leap years in the following
    //sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year” 

    let year = 2000;
switch(year<2023){
    case 2004:
        console.log("2004 is a leap year");
        break;
        case 2008:
            console.log("2008 is a leap year");
            break;
            case 2012:
                console.log("2012 is a leap year");
                break;
                case 2016:
            console.log("2016 is  leap year");
            break;
            case 2020:
            console.log("2020 is a leap year");
            break;
            default:
                 console.log("It is not a leap year")
                 break;
}

  // 5. Write a function that takes in an array of numbers and returns an array that has all
  // elements multiplied by 4.
  // let numArray = [12,87,45,75,23,64,73]
function multiply(numArray){

let i = 0;
let multiply = 4;
while(i<numArray.length){
   console.log(multiply*=numArray[i]);
    i++;
};
}
let numArray = [12,87,45,75,23,64,73];
let multiply2 = multiply()
console.log((multiply2));
//6. Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
function turnToNumber(nums){
for(i=0;i<nums.length;i++){
    console.log(nums[i])
}

}
let nums = ['10','24','45','56','67'];
let turn = turnToNumber(nums);
console.log(turn)











































































