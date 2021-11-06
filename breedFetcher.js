const request = require('request');

// const breed = process.argv[2];

// const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

// request(URL, (error, response, body) => {
//   if (error) {
//     return error;
//   } else {
//     // console.log(response);
//     const data = JSON.parse(body);
//     if (!data[0]) {
//       console.log("No breed found!");
//     } else {
//       // console.log(data[0].description);
//       return data[0].description;
//     }
//   }

// });

const fetchBreedDescription = (breedName, callback) => {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // callback(catAPIRequest(URL));
  let err = null;
  let desc = null;

  request(URL, (error, response, body) => {
    // console.log(error);
    // console.log(body);
    if (error) {
      err = error;
      
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        err = "Invalid breed input";
      } else {        
        desc = data[0].description;
      }
    }
    callback(err, desc);
  });

};


// fetchBreedDescription("siam", (error, desc) => {
//   if (error) {
//     console.log('Error fetch details: ', error);
//   } else {
//     console.log(desc);
//   }
// })

module.exports = {fetchBreedDescription};