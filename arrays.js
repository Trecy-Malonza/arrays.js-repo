//Find the last element of the following arrays.arr1 = [3,7,34,90,12]

let arr1 = [3,7,34,90,12];
console.log('last item', arr1.slice(-1));
//arr2 = [true, "green", "where",12,56]


let arr2 =[true, "green","where",12,56];
console.log('last item',arr2.slice(-1));

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let arr3 =[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort((a, b) => a-b);
console.log({arr3});

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr4 =["boy","man","girl","school","girl","woman"];
let uniqueArr=[...new Set(arr4)];
let duplicateArr= arr4.filter((item,index) => arr4.indexOf(item) !==index);
console.log({duplicateArr});


   


//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 =["the", "way", "x", 4];
 if((arr5.includes("food"))){
    console.log({arr5});
 }
 else{
    console.log("the search word was not found");
 }





//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
let sortWord = word.split("").sort().join("");
console.log(sortWord);
   


//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits =["Mangos", "Pineapples","Oranges","watermelon","Banana","gripes","Apple","Quavas","Pawpaw"];
fruits.splice(5,0, 'Tomato');
console.log(fruits);
