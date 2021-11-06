const request = require('request');

const breed = process.argv[2];

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // console.log(response);
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log("No breed found!");
    } else {
      console.log(data[0].description);
    }
  }

});