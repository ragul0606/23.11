"use strict"

// String Reversal with Slice: Write a function that reverses a string using the slice method
// Question: Reverse the string "hello world".

function reverseString (str) {
    return str.split("").slice().reverse().join();
}
let result = reverseString("hello world");

console.log(result);

// String Substring Extract and Concatenate: Create a function that extracts substrings from two given strings and concatenates them. 
// Question: Extract a substring from "abcdef" starting at index 2 and concatenate it with a substring from "123456" starting at index 1
// Expected Output: "c23456"

function extractSubstr (str1, str2) {
    return str1.charAt(2) + str2.slice(1, 6);
}

console.log(extractSubstr("abcde", "123456"));

// String Trim and Concatenate with Custom Separator: Implement a function that trims spaces from both ends of two strings, concatenates them with a custom separator, and removes any extra spaces
// Question: Trim and concatenate the strings " Hello" and "world! " with a hyphen as the 	separator.

function trimAndConcat (trim1, trim2, sep) {
    let trimmed1 = trim1.trim();
    let trimmed2 = trim2.trim();
    let result = trimmed1.concat(sep, trimmed2);
    return result;
}

console.log(trimAndConcat(" Hello", "world! ", "-"));

// String Concatenation with Repeated Substring: Write a function that uses the concat method to concatenate a substring of a string with itself a certain number of times. 
// Question: Concatenate the substring "abc" with itself 4 times.  
// Expected Output: "abcabcabcabc"

function repeatedString (repStr) {
    return repStr.repeat(4);
}

console.log(repeatedString("abc"));

// String Word Count and Concatenate: Create a function that counts the number of words in a sentence and then concatenates each word with the word "ing". 
// Question: Count words in the sentence "Coding is fun and rewarding!" and concatenate each word with "ing".

function countAndConcat (sentence) {
    let words = sentence.split(" ");
    let count = words.length;
    let ingWords = words.map(function (word) {
        return word + "ing";
    });
    // console.log(ingWords);
    let result = ingWords.join(" ");
    return `The sentence has ${count} words and The new updated string is ${result}`
}

console.log(countAndConcat("Coding is fun and rewarding!"));

// String Dynamic Slicing and Concatenation: Implement a function that extracts a dynamic substring from a string using the slice method and then concatenates it with another string. 
// Question: Extract a substring from "abcdefgh" starting at index 3 and ending at the index of "ef" in the same string. Concatenate it with "123". 

function dynamicSlicing (extractStr) {
    let index = extractStr.indexOf("ef");
    // console.log(index);
    let substring = extractStr.slice(3, index);
    let result = substring.concat("123");
    return result;
}

console.log(dynamicSlicing("abcdefgh")); // d123 ?

// String Substring from the End: Write a function that extracts a substring from the end of a string using the slice method. 
// Question: Extract the last 3 characters from the string "programming".  
// Expected Output: "ing"

function subStrEnd(endStr) {
    return endStr.slice(-3);
}

console.log(subStrEnd("programming"));

// String Start and End Check: Create a function that checks if a given string starts with "http://" and ends with ".com" using the startsWith and endsWith methods. 
// Question: Check if the string "http://www.example.com" starts with "http://" and ends with 	".com".  
// Expected Output: true

function startEndCheck(checkStr) {
    let startCheck = checkStr.startsWith("http://");
    let endCheck = checkStr.endsWith(".com");
    return true ? startCheck && endCheck == true : false;
}

console.log(startEndCheck("http://www.example.com"));

// String Search and Concatenation: Implement a function that searches for a given keyword in a sentence, extracts the keyword using the slice method, and concatenates it with "ing". 
// Question: Search for the keyword "exciting" in the sentence 
// "Learning new skills is always exciting!" and concatenate it with "ing". 

function searchAndConcat(searchString) {
    let keyWord = searchString.search("exciting");
    let sliced = searchString.slice(keyWord);
    return sliced + "ing";
    // console.log(sliced);
    // console.log(typeof(keyWord));
    // console.log(keyWord);
}

console.log(searchAndConcat("Learning new skills is always exciting"));

// String Concatenation with Reversed Substrings: Write a function that concatenates two strings, where the second string is the reverse of the first string. 
// Question: Concatenate the strings "abcdef" and the reverse of "abcdef".  
// Expected Output: "abcdeffedcba" 

function concatAndReverse(inputStr) {
    let str = inputStr;
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let reversedStr = reverseStr.join("");
    return str.concat(reversedStr);
}

console.log(concatAndReverse("abcdef"));