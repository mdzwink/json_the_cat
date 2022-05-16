
//4. func just called and sent two parameters from index.js

const fetchBreedDescription = function(breedName, callback) {
  
  //5. requires request package to access request functionality
  
  const request = require('request');

  //6. requests website with first parameter 'breedName' (the users input from terminal handled on line 4 of index.js)
    //7. inline function is initiated and handles the response from the website's server
    
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {

        //this anonymous is asynchronous, it will wait until it gets a response from the websites servers
    // 8. the body of the response is parsed from json (all string) to js array
    if(error) {
      console.log('ERRRRRRRRRRR')
      return callback(error, null)
    }
    if (response.statusCode !== 200) {
      return callback(error, null)
    }
    const data = JSON.parse(body);
    // begin calling the callback with specific peramiters based on error status
    // 9. if error is true, call the callback with the error and no discription
    // console.log('----------------->>>>>>>>>>>',error)
    //> step e.1 index.js
    if (data.length !== 0) {
      const description = data[0].description;
      callback(null, description)
    } else  {
      callback('no description found :(', null)
    }

  });
};

    //   console.log('--------------------err-mssg--------------------')    
    //   console.log('>>>\nI can\'t fur the 9th life of me find that breed =^..^= \n......maybe try spelling the name differently? [[[]]]\n<<<');
    //   console.log('--------------------err-mssg--------------------')    

//write tests for this code after refactering
//test that request returns something
//test that it logs a string error message when there is an error
//test that it logs a string message when the wrong input is given


module.exports = { fetchBreedDescription };