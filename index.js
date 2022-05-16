//1.require function from breedFetcher.js
const { fetchBreedDescription } = require('./breedFetcher');
//2.extracting user input from terminal exicution of this file, i.e. which cat to look up
const breedName = process.argv.slice(2);

//3.calls function in breedFetcher and passes two parameters
  //first is the user input held in 'breedName'
  //second is callback func for when it is called from breedFetcher.js
//<<step 4. in breedFetcher.js
fetchBreedDescription(breedName, (error, description) => {
      //this callback func is asynchronous
  //>>e.1. error caught from server response in breedFetcher.js
  if (error) {
    //>>e.2. log custom and error message
    console.log('Error fetch details:', error);
  } else {
    //>> if no error then log description
    console.log(description);
  }
});

