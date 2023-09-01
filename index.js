//CODING CHALLENGES


/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(str) {
    const capitalStr = str.toUpperCase();
    const strArray = capitalStr.split(" ");
    const finalStr = strArray.join(" 😱 ")
    return str
        .toUpperCase()
        .split(' ')
        .join(" 😱 ") + "!"
}

// Test your function
// console.log(panic("I'm almost out of coffee")); 
// console.log(panic("winter is coming"))

//---------------

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(str) {
    //take last letter of a string
    //if its a an exclamation mark then remove it
    //make the result string lower case
    if(str.endsWith("!")){
        str = str.slice(0, -1);
    }
    return 'shh ' + str.toLowerCase()
}

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));


/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        // i % 2 ===0 ? newStr += str[i].toUpperCase() : newStr += str[i]
        if(i % 2 === 0){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        } 
    }
    return newStr
}

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));


/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    const sentenceArr = str.split(" ");
    let result = sentenceArr.map((word) => capitalizeWord(word));

    return result.join(" ")
}
// function toTitleCase(str){
//     let result = ''
//     for(let word of str.split(" ")){
//         result += capitalizeWord(word) + " ";
//     }
//     return result
// }

// Test your functions

// console.log(capitalizeWord("pumpkin"));
// console.log(toTitleCase("pumpkin pranced purposefully across the pond"));


/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses(){
    for(let i = 1; i <= 100; i++){
        if(i % 5 === 0 && i % 3 ==0){
            console.log(`${i} - Ultra giga bonus`);
        }
        else if(i % 3 === 0){
            console.log(`${i} - Vacation`);
        }else if(i % 5 === 0){
            console.log(`${i} - 100 000 bonus`);
        }else{
            console.log(`${i} - :(`);
        }
    }
}

// awardBonuses();

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    if(word.startsWith(":") && word.endsWith(":")){
        const trimmedWord = word.slice(1, -1);
        if(emojis[trimmedWord]){
            return emojis[trimmedWord];
        }else{
            return trimmedWord;
        }
    }else{
        return word
    }
}   

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    // split the phrase to single words
    let words = phrase.split(" ");
    // replace words that pass condition with emojis
    const result = words.map((word) => emojifyWord(word));
    // join the phrase back
    return result.join(" ");
}



// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));



/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2){
    // make both words lower case
    str1 = str1.toLowerCase().split("").sort().join("");
    str2 = str2.toLowerCase().split("").sort().join("");

    // check if their length is the same
    return str1 === str2
}

// console.log(isAnagram("cat", "tac"));
// console.log(isAnagram("treasure", "measure"));




/* We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(str){
    let result = str.split("").reverse().join("")
    return result
}

function reverseStringManual(str){
    let newString = "";

    for(i = str.length -1 ; i >= 0; i--){
        newString+=str[i]
    }

    console.log(newString);
}

// reverseStringManual("johA")
/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    let result  = arr.map((item) => reverseString(item))
    return result
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));




/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    let reversedStr = str.split("").reverse().join("");
    return reversedStr === str
}

// Test your function
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("civic"));
// console.log(isPalindrome("octopus"));
// console.log(isPalindrome("pumpkins"));
// console.log(isPalindrome("madam"));


/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
//Her solution
function removeDupeChars(chars){
    let duplicatesRemoved = ""; 
    //loop thought the chars
    for(let i = 0; i < chars.length ; i++){
        //if char in duplicates do nothing
        //else add it to the string
        if(!duplicatesRemoved.includes(chars[i])){
            duplicatesRemoved += chars[i]
        }
    }
    return duplicatesRemoved
}

//My solution
// function removeDupeChars(chars){
//     let set = new Set(chars);
//     return [...set].join("");
// }

// console.log(removeDupeChars(password));


/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
    //lowercase the string and remove spaces
    const clrStr = str.toLowerCase().replace(" ", "");
    //loop through the string
    let result = {};
    for(let i = 0; i < clrStr.length; i++){
        if(!result[clrStr[i]]){
            //if that key doesnt exist
            result[clrStr[i]] = 1;
        }else{
            //else just add one to the key
            result[clrStr[i]] += 1;
        }
    }
    return result
 }
 
//  console.log(countChars("Peggy Porth"));



/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
    
    //O(n) solution
    const trackDupes = {}

    return arr.filter((item) => {
        //filter function for each item if the callback return false or falsy value the item is not included in the result
        if(!trackDupes[item]){
            trackDupes[item] = true //can be anything;
            return true
        }
        return false;
    })

    
    // //callback solution
    // let result = [];
    // arr.forEach((item) => {
    //     if(!result.includes(item)){
    //         result.push(item)
    //     }
    // })
    // return result


    ////Her solution
    //loop through an array
    // let result = [];
    // for(let i = 0; i < arr.length; i++){
    //     //if item not in result add it there
    //     if(!result.includes(arr[i])){
    //         result.push(arr[i])
    //     }
    //     //else do nothing
    // }
    // //return the result array
    // return result

    
    ////My solution
    // const set = new Set(arr);
    // return [...set]
}

// console.log(removeDupesFromArray(eggScrambleRecipe));



/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    //double for loop solution
    let result = [];
    
    arr.forEach((item) => {
        if(Array.isArray(item)){
            item.forEach(arrayItem => result.push(arrayItem))
        }else{
            result.push(item)
        }
    })
    
    return result 
    
    //recursion, but the result need to be outside of the recursion scope
    // let result = []
    // for(let i = 0; i < arr.length; i++){
    //     if(!Array.isArray(arr[i])){
    //         result.push(arr[i])
    //     }else{
    //         flatten(arr[i])
    //     }
    // }
    // return result
    //     //for each item check what type it is
            //if item not an array add to the result
            //else if an array loop through the array and put it in the thing
            //or use recursion!

    // //Built in method solution
    // return arr.flat()
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));




