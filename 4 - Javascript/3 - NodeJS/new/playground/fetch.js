const axios = require('axios');
// // GET Request.
// fetch('https://api.github.com/users/mrmansoornasir')
//     // Handle success
//     .then(response => response.json())  // convert to json
//     .then(json => console.log(json))    //print data to console
//     .catch(err => console.log('Request Failed', err)); // Catch errors

// axios

axios.get('https://gist.githubusercontent.com/Bachmann1234/a2b4207caa29dbc23e29/raw/37825725807d087455200801ccbb03c16448efc6/gistfile1.txt')
  .then((response) => {
    // console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    // console.log(response.config);
  });