// Create a variable that holds your name
var myName = "Daniel Cossins";

// Create an object that holds your personal information
var myInfo = {
  age: 18,
  last_company: "none",
  marital_status: "single",
  spouse: "none"
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array
var AlbumThatIsGood = {
  name: "AlbumThatIsGood",
  artist: "GoodArtist",
  year: 1900,
  sales: 235,
  number_of_hits: 0
};

var AlbumThatIsBad = {
  name: "AlbumThatIsBad",
  artist: "BadArtist",
  year: 2009,
  sales: 2457467,
  number_of_hits: 7
};

recordArray[recordArray.length] = AlbumThatIsGood;
recordArray[recordArray.length] = AlbumThatIsBad;



/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var albumRating = function (album, rating) {
  // Add the rating to the album
  album.rating = rating;
};

function randomNum(){
	return Math.floor(Math.random()*10-1);
}
/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (arr, rating) {
  for(var i=0; i<arr.length; i++) {
    albumRating(arr[i], rating);
  }
};

// Call the function that starts modifying the array
modifyAlbums(recordArray, 3);
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById("records");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/

recordDom.innerHTML = JSON.stringify(recordArray, null, 2);