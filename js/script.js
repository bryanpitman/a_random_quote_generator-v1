/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * created an array of 5 objects to store movie quotes
 * Quote: movie quote
    Source: Movie character
    Citation: Name of the movie
    Year: Year movie released
***/
let quotes = [
  {
    Quote: 'Alright everyone chill',
    Source: 'Mr. Freeze',
    Citation: "Batman and Robin",
    Year: 1997
  },
  {
    Quote: 'Apes together strong',
    Source: 'Caesar',
    Citation: 'Rise of the Planet of the Apes',
    Year: 2011
  },
  {
    Quote: 'I am Groot',
    Source: 'Groot',
    Citation: 'Guardians of the Galaxy',
    Year: 2014
  },
  {
    Quote: 'There is no spoon',
    Source: 'Young Monk',
    Citation: 'The Matrix',
    Year: 1999
  },
  {
    Quote: 'Why so serious?',
    Source: 'Joker',
    Citation: 'The Dark Knight',
    Year: 2008
  }
]

/***
 * getRandomQuote function returns a random number between 0 - 4
***/
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 5);
  console.log(randomNum); 
  return randomNum;
  
}
console.log(quotes[getRandomQuote()]); 

/***
 * printQuote function contains the appended HTML string and calls the randomQuote function above
***/

function printQuote() {
  let randomObj = quotes[getRandomQuote()];
  let htmlVar = `<p class="quote"> ${randomObj.Quote} </p><p class="source"> ${randomObj.Source} `;


if(typeof(randomObj.Citation) === "string") {
  htmlVar += `<span class="citation"> ${randomObj.Citation} </span>`
}
if(typeof(randomObj.Year) === "number") {
  htmlVar += `<span class="year"> ${randomObj.Year} </span></p>` 
} 
  document.getElementById('quote-box').innerHTML = htmlVar; // connected the get quotes button on the webpage
  return htmlVar;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);