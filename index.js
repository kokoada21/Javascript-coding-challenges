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

// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));


/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    let sum = 0;
    arr.forEach(number => sum+=number);
    return sum
}

// console.log(sumArray(studentCount));


/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    let highestVotes = 0;
    let winningItem = "";
    for(let item in obj){
        if(obj[item] > highestVotes){
            highestVotes = obj[item];
            winningItem = item;
        }
    }
    return `The winner is ${winningItem} with ${highestVotes} points`
}

// console.log(findTheWinner(gameNightFood));



import userData from "./data/people.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data){

    const result = data.map(({name, dob}) => {
        return {
            fullName: name.first + " " + name.last,
            birthday: new Date(dob.date).toDateString()
        }
    })

    return result

}

// console.log(transformData(userData));


import podcasts from "./data/podcasts.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data){
    return data
        .filter(item => !item.paid ? true: false) // nebo item.paid === false misto ternary
        .map(item => {
            return {
                title: item.title,
                rating: item.rating,
                paid: item.paid
            }
        })
}

// console.log(getFreePodcasts(podcasts))


import products from "./data/products.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    return data
        .filter(item => item.type === "sweet")
        .map(candy => (
            {
                item: candy.item,
                price: candy.price  
            }
        ))
};

// const shoppingCart = getSaleItems(products);
// console.log(shoppingCart);


//Practising reduce() method

import shoppingCart from "./data/products2.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    const initalValue = 0;
    const total = arr.reduce((acc, curr) => {
        //acc = running total (initillized as zero in this case)
        //curr = current value,
        //third argument is
        return acc + curr.price 
    }, initalValue)

    return total.toFixed(2)
}

// console.log(total(shoppingCart));



/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){

    return arr.reduce((acc, curr) => {
        if(curr.type === "savory"){
            return acc + curr.price
        }
        return acc
    }, 0);

}

// console.log(totalSavory(shoppingCart));


import products3 from "./data/products3.js";

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

function sortProducts(data){
    return data.sort((a, b) => (a.price - b.price))
}

// const listByCheapest = sortProducts(products3);
// console.log(listByCheapest);


import mediaData from "./data/mediaData.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data){
    //direct lookup !! important !!
    const tags = data.map(item => item.tags).flat();
    let uniqueTags = {};
    return tags.filter(tag => {
        if(!uniqueTags[tag]){
            uniqueTags[tag] = true;
            return true
        }else{
            return false
        }
    })

    // const tags = data.map(item => item.tags).flat();
    // let result = []
    // for(let i = 0; i < tags.length; i++){
    //     if(!result.includes(tags[i])){
    //         result.push(tags[i])
    //     }
    // }
    // return result

    // //My solution
    // const tags = data.map(item => item.tags).flat();
    // const set = new Set(tags)
    // return [...set]
}

// console.log(getUniqueTags(mediaData));


import podcasts2 from "./data/podcasts.js";

/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

function sortByDuration(data, flightLength){
    //sort an array by duration
    const sortedData = data
        .sort((a, b) => {
            //base the order on the flight length
            if(flightLength <= 60){
                return a.duration - b.duration
            }else{
                return b.duration - a.duration
            }  
        })
            //construct the items for logging
        .map((item, index) => {
            return `${index + 1}. ${item.title}, ${item.duration} minutes`
        })
    //log the result into the console
    console.log(sortedData);
}

// sortByDuration(podcasts2, 60);


import postData from "./data/posts.js";

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data){
    const total = data.reduce((acc, curr) => {
        return acc += curr.likes //nebo acc + curr
    }, 0)

   return (total/data.length).toFixed(2)
} 


// console.log(calcAverageLikes(postData))


/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
   return data.reduce((acc, curr) => {
    return [...acc, ...curr.hosts]; //or acc.concat(curr.hosts)
   },[])
}

function assignAwards(data){
    const hosts = getHosts(data);
    return hosts.map(host => {
        const randomAwardIndex = Math.floor(Math.random() * awards.length) 
        return `${awards[randomAwardIndex]} ${host}`;
    })
}

// console.log(getHosts(podcasts));
// console.log(assignAwards(podcasts));



/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

function createDescriptionsFor(data){
   //map through data
   //for each item add description using data from the current item

   return data.map(item => {
    const authors = ((item.hosts).length > 1) ? item.hosts.slice(0, -1).join(", ") + " and " + item.hosts.slice(-1) : (item.hosts).toString();
        return (
            {
                ...item,
                description: `${item.title} is a ${item.duration} minute ${item.genre} podcast hosted by ${authors}`
            }
        )
   })
}

// console.log(createDescriptionsFor(podcasts))



/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

function areAnagrams(a,b){
    //remove spaces from both string
    //sort letters alphabetically
    const cleanA = a.toLowerCase().split("").sort().join("").trim();
    const cleanB = b.toLowerCase().replace(/\s+/g, '').split("").sort().join("");
    //compare strings
    //if same => anagram else =>not anagrams
    return cleanA === cleanB
}

function isAnagramInArray(anagram, arr){
    //filter arr based on condition areAnagrams()
    return arr.filter(item => areAnagrams(item, anagram))
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
















