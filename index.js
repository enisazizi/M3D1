// Exercise 1

function sumInt(a,b){
    if(a===b){
        let samesum=3*(a+b)
        return samesum;
    }
    else{
        return a+b;
    }
}
// console.log(sumInt(2,2))

// Exercise 2  Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function checkNums(x,y){
    if(x===50 || y===50 || (x+y)===50){
        return true;
    }
    else{
        return false;
    }

}
// console.log(checkNums(24,25))

// Exercise 3 Create a function to remove a character at the specified position of a given string and return the new string.
const removeChar = (str, N) => {
    let newStr = str.slice(0, N - 1) + str.slice(N, str.length);
    return newStr;
  };
  
//  console.log(removeChar("Strive", 3));

//Exercise 4
function largestNum(x,y,z){
    if(x>y && x>z){
        return x;
    }
    else if(y>x && y>z){
        return y;
    }
    else{
        return z;
    }
}
// console.log(largestNum(2,7,5))

// Exercise 5  Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

    function checkRange(x,y){
        if(( x>39 && x<61) && ( y>39 && y<61)){
           return "They are in the range 40..60";
        }
        else if (( x>69 && x<101) && ( y>69 && y<101)){
            return "They are in the range 70...100";
        }
        else{
            return "One of the numbers or both are not in ranges";
        }
    }

    // console.log(checkRange(30,100))

    // Exercise 6 Create a function to create a new string of specified copies (positive number) of a given string. 

   const copyString = (str, N) => {
    let newStr;
    let myArray = [];
    for (let i = 0; i < N; i++) {
    myArray.push(str);
  }

  newStr = myArray.join("");

  return newStr;
};

// console.log(copyString("2", 2));

    // Exercise 7 Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.


    function displayCity(str){
        let startwith1 = "Los";
        let startwith2= "New";
        if(str.startsWith(startwith1) || str.startsWith(startwith2)){
            return str;
        }else {
            return false;
        }

    }
    // console.log(displayCity("New York"))

    // Exercise 8  Create a function to calculate the sum of three elements of a given array of integers of length 3.

   
  let sum =0;
    function calculateSum(array1){
        for(let i =0 ; i<array1.length; i++){
             sum = sum +array1[i];
        }
       return sum;
    }
    // console.log(calculateSum([2,3,4]))
    
    // Exercise 9   Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

    function testArray(array2){
        for(let i =0 ; i<array2.length ; i++){
            if(array2[i] === 1 || array2[i] === 3){
                return "the array contains 1 or 3"
            }
           
        }
       
            return "the array doesnt contains 1 or 3"
        

    }
    // console.log(testArray([2,3]))

    //  Exercise 10 Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

    function testArray1(array2){
        for(let i =0 ; i<array2.length ; i++){
            if(array2[i] === 1 || array2[i] === 3){
                return "the array contains 1 or 3"
            }
           
        }
       
            return "the array doesnt contains 1 or 3"
        

    }
    // console.log(testArray1([1,5]))

    // Exercise 11 Create a function to find the longest string from a given array of strings
        
    function longestString(array1){
        let longstring =" "
        for(i=0;i<array1.length;i++){
            if(longstring.length<array1[i].length){
                longstring=array1[i];
            }
        }
        return longstring;
    }

    // console.log(longestString(["enith","abcs","Enisbaba12312312313","adedasdasda","enisbabab123123"]))

    // Exercise 12  Create a function to find the types of a given angle.

    // Types of angles:
    // Acute angle: An angle between 0 and 90 degrees.
    // Right angle: An 90 degree angle.
    // btuse angle: An angle between 90 and 180 degrees.
    // Straight angle: A 180 degree angle.

    function typeOfAngle(x){

        if(x>0 && x<90){
            return "Acute angle"
        }
        else if( x===90){
            return "Right angle"
        }
        else if(x>90 && x<180){
            return "Obtuse angle"
        }
        else if(x===180){
            return "Straight angle"
        }

    }
    // console.log(typeOfAngle(180))

    // Exercise  13 Create a function to find the index of the greatest element of a given array of integers

    function arrayOfInt(array5){
        
        let biggestnum=0;
        let numindex=0;

        for(i=0;i<array5.length;i++){
            if(biggestnum<array5[i]){

                biggestnum=array5[i];
                 numindex=i;
            }
          
        }
        return numindex;
    }
    // console.log(arrayOfInt([2,11,3,5,7,2,7,9]))

    // Exercise 14 Create a function to get the largest even number from an array of integers.

    function largestEvenNum(array6){
        let biggestEven=0;
        for(i=0;i<array6.length;i++){
            if(array6[i]%2===0){
               return biggestEven=array6[i]
            }
        }
        return "They array doesnt have even numbers"
    }
    // console.log(largestEvenNum([1,3,6,7]))

    // Exercise 15 Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
    
// its the same like exercise 2
// function checkNums(x,y){
//     if(x===50 || y===50 || (x+y)===50){
//         return true;
//     }
//     else{
//         return false;
//     }

// }
        // Exercise 16  Create a function to check from two given integers, whether one is positive and another one is negative.

            function checkposneg(x,y){
                if(x<0 && y>0){
                    return "the first number is negative => "+x +" the second number is positive =>"+y
                }
                else if(x>0&&y<0){
                    return "the first number is positive => "+x +" the second number is negative => "+y
                }
                else if(x<0 && y<00){
                    return "Both numbers are negativ"
                }
                else{
                    return "both numbers are positiv"
                }

            }
            // console.log(checkposneg(2,-2))
            // Exercise 17  
            // Create a function to create new string with first 3 characters are in lower case and the others in upper case.
            //  If the string length is less than 3 convert all the characters in upper case.
            function createNewString (str) {
                if (str.length < 3) {
                  return str.toUpperCase();
                } else {
                  let threechar = str.slice(0, 3).toLowerCase();
                  let afterThree = str.slice(3, str.length).toUpperCase();
                  return threechar + afterThree;
                }
              };
            //   console.log(createNewString("strive is the best"));
           
            // Exercise 18 Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

                    function calculateSum(x,y){
                        if((x+y)>49 &&(x+y)<81){
                            return 65;
                        }
                        else{
                            return 80;
                        }
                    }
                    // console.log(calculateSum(74,50))

                   // Exercise 19 
            //   Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
            // If the number has 3 as a factor, output 'Diego'.
            // If the number has 5 as a factor, output 'Riccardo'.
            // If the number has 7 as a factor, output 'Stefano'.
            // If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
            // Examples
            // 28's factors are 1, 2, 4, 7, 14, 28.
            // this would be a simple "Stefano".
            // 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
            // this would be a "DiegoRiccardo".
            // 34 has four factors: 1, 2, 17, and 34.
            // this would be "34".

            function numToStr(N) {
                let myArray = [];
                let str1 = "";
                let str2 = "";
                let str3 = "";
                for (let i = 0; i <= N; i++) {
                  if (N % i === 0) {
                    myArray.push(i);
                  }
                }
                for (let j = 0; j < myArray.length; j++) {
                  if (myArray[j] === 3) {
                    str1 = "Diego";
                  } else if (myArray[j] === 5) {
                    str2 = "Riccardo";
                  } else if (myArray[j] === 7) {
                    str3 = "Stefano";
                  }
                }
                console.log(myArray);
                if (str1 === "" && str2 === "" && str3 === "") {
                  return N;
                } else {
                  return str1 + str2 + str3;
                }
              };


 
// console.log(numToStr(7));   
// console.log(numToStr(30));  
// console.log(numToStr(28));


// Exercise 20

// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

            function phrasetoacronym(str){
                let words,acronym,nextWord;
                words=str.split(" ");
                acronym="";
                let i=0;
                while ( i<words.length) {
                    nextWord = words[i];
                    acronym = acronym + nextWord.charAt(0);
                    i = i + 1 ;
            }
            return acronym
        }
            // console.log(phrasetoacronym(" Strive School"))


       