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
    quote: 'Alright everyone chill',
    source: 'Mr. Freeze',
    citation: "Batman and Robin",
    year: 1997
  },
  {
    quote: 'Apes together strong',
    source: 'Caesar',
    citation: 'Rise of the Planet of the Apes',
    year: 2011
  },
  {
    quote: 'I am Groot',
    source: 'Groot',
    citation: 'Guardians of the Galaxy',
    year: 2014
  },
  {
    quote: 'There is no spoon',
    source: 'Young Monk',
    citation: 'The Matrix',
    year: 1999
  },
  {
    quote: 'Why so serious?',
    source: 'Joker',
    citation: 'The Dark Knight',
    year: 2008
  }
]

/***
* getRandomQuote function returns a random quote in the array. 
***/
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  console.log(randomNum);
  return quotes[randomNum];


}
console.log(quotes[getRandomQuote()]);

/***
 * printQuote function contains the appended HTML string and calls the randomQuote function above
***/

function printQuote() {
  let randomObj = getRandomQuote();
  let htmlVar = `<p class="quote"> ${randomObj.quote} </p><p class="source"> ${randomObj.source} `;


  if (typeof (randomObj.citation) === "string") {
    htmlVar += `<span class="citation"> ${randomObj.citation} </span>`
  }
  if (typeof (randomObj.year) === "number") {
    htmlVar += `<span class="year"> ${randomObj.year} </span></p>`
  }
  document.getElementById('quote-box').innerHTML = htmlVar; // connected the get quotes button on the webpage
  return htmlVar;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);