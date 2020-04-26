
/* THIS IS ALL FROM MY WEATHER JOURNAL APP EXCEPT FOR THE TIME FUNCTION */




// Personal API Key for OpenWeatherMap API
//w3Sschool and Stack Overflow helped with the code and underestanding
const geoApiUn = '&username=rashmeat';
// Create a new date instance dynamically with JS


//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function geoPerformAction(e) {

  // Friends helped with getting API data
  getGeoApiData('http://api.geonames.org/postalCodeSearchJSON?postalcode=', document.getElementById('zipPostCode').value, geoApiUn)
    .then((APIarr) => {
      postGeoData('/geoadd', { Lat: APIarr[1], Lon: APIarr[0], Pla: APIarr[2] });
    })

    .then(function () {
      updateUIGeo();
    })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getGeoApiData = async (apiURL, place, geoApiUn) => {
  const response = await fetch(apiURL + place + '&maxRows=10' + geoApiUn);
  try {
    const webData = await response.json();
    const Long = webData.postalCodes[0].lng;
    const Lat = webData.postalCodes[0].lat;
    const Pla = webData.postalCodes[0].placeName;

    const APIarr = [Long, Lat, Pla];

    return APIarr;
  }
  catch (error) {
    console.log("error", error);
  }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveGeoData = async (url = '') => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json()
  }
  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postGeoData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIGeo = async () => {
  const request = await fetch('/geoall')
  try {
    const recRec = await request.json();
    console.log(recRec);
    document.getElementById('lat').innerHTML = recRec.Lat;
    document.getElementById('lon').innerHTML = recRec.Lon;
    document.getElementById('place').innerHTML = recRec.Pla;

  } catch (error) {
    alert('Please put in a valid zip/postal code');


  }
}




//Weatherbit Starts Here



// Personal API Key for OpenWeatherMap API
//w3Sschool and Stack Overflow helped with the code and underestanding
const weaApiKey = '48729f43d7224c7083c91e6bcdad825b';
// Create a new date instance dynamically with JS

//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function weaPerformAction(e) {


  const WBURL = 'https://api.weatherbit.io/v2.0/history/daily?';
  const getLat = document.getElementById('lat').textContent;
  const getLon = document.getElementById('lon').textContent;
  const getStartDate = document.getElementById('startingDateForm').value;
  const getEndDate = document.getElementById('endingDateForm').value;


  // Friends helped with getting API data
  getWeaApiData(WBURL, getLat, getLon, getStartDate, getEndDate, weaApiKey)
    .then((APIarrWea) => {
      postWeaData('/weaadd', { Max: APIarrWea[0], Min: APIarrWea[1] });
    })

    .then(function () {
      updateUIWea();
    })

    .catch(error => alert(error.message));


}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getWeaApiData = async (apiURL, lat, lon, startDate, endDate, APIkey) => {
  const response = await fetch(apiURL + '&lat=' + lat + '&lon=' + lon + '&start_date=' + startDate + '&end_date=' + endDate + '&key=' + APIkey);
  try {
    const webData = await response.json();
    const max = webData.data[0].max_temp;
    const min = webData.data[0].min_temp;

    const APIarrWea = [max, min];

    return APIarrWea;
  }
  catch (error) {
    console.log("error", error);
  }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveWeaData = async (url = '') => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json()
  }
  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postWeaData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIWea = async () => {
  const request = await fetch('/weaall')
  try {
    const recweaRec = await request.json();
    console.log(recweaRec);
    document.getElementById('maxtemp').innerHTML = 'Predicted Highest Temperature: ' + Math.round((recweaRec.Max * 1.8) + 32) + '&#8457;';
    document.getElementById('mintemp').innerHTML = 'Predicted Lowest Temperature: ' + Math.round((recweaRec.Min * 1.8) + 32) + '&#8457;';

  } catch (error) {
    console.log("error", error)
  }
}

















//w3Sschool and Stack Overflow helped with the code and underestanding
const pixApiKey = '8490583-5eb480e7a818afeeba4a92496';
// Create a new date instance dynamically with JS

//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function pixPerformAction(e) {

  // Friends helped with getting API data
  getPixApiData(pixApiKey, document.getElementById("place").textContent)
    .then((pic) => {
      postPixData('/weaadd', { Pic: pic });
    })

    .then(function () {
      updateUIPix();
    })
    .catch(error => alert(error.message));


}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getPixApiData = async (key, picImg) => {
  const pixresponse = await fetch('https://pixabay.com/api/?key=' + key + '&q=' + picImg);
  try {
    const webData = await pixresponse.json();
    const pic = webData.hits[0].largeImageURL;
    return pic;
  }
  catch (error) {
    console.log("error", error);
  }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrievePixData = async (url = '') => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json()
  }
  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postPixData = async (url = '', data = {}) => {

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIPix = async () => {
  const request = await fetch('/weaall')
  try {
    const recPixRec = await request.json();
    console.log(recPixRec);
    document.getElementById('imagep').src = recPixRec.Pic;

  } catch (error) {
    console.log("error", error)
  }
}



const handleCountdown = () => {
  const startDate = new Date(document.getElementById('startingDateForm').value);
  const endDate = new Date(document.getElementById('endingDateForm').value);

  const time = new Date();
  const countdown = Math.ceil(startDate - time);

  const tripLength = endDate.getTime() - startDate.getTime();
  //Help from JKmag
  document.getElementById('countdown').textContent = Math.ceil(countdown / 8.64e7) + ' more day(s) until your trip';


  document.getElementById('totDuration').textContent = tripLength / 8.64e7 + ' day(s) long trip';


};
//Assign to various buttons
let geoClick = () => {

  geoPerformAction();
  handleCountdown();


}

let weaClick = () => {

  weaPerformAction();
  handleCountdown();


}


let pixClick = () => {

  pixPerformAction();
  handleCountdown();


}

export { geoClick, weaClick, pixClick }