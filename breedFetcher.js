const request = require('request');
const argv = process.argv.slice(2); //grabbing user input from terminal

request(`https://api.thecatapi.com/v1/breeds/search/?q=${argv}`, (error, response, body) => {
  // console.log('>>>>>>>>>>>>>>>>statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (error !== null) {
    console.log(error);
  }
  if(response.statusCode === 404) {
    console.log('\n\n\n>>Me thinks >>CHECK URL<<\n              ^^^^^^^^^\n\n')
  }
  if (body = []) {
    console.log('--------------------err-mssg--------------------')    
    console.log('>>>\nI can\'t fur the 9th life of me find that breed =^..^= \n......maybe try spelling the name differently? [[[]]]\n<<<');
    console.log('--------------------err-mssg--------------------')    
  }
});