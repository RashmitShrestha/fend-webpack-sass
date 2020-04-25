// Personal API Key for OpenWeatherMap API
//w3Sschool and Stack Overflow helped with the code and underestanding
const geoApiUn = 'rashmeat';
// Create a new date instance dynamically with JS


//Help From "Updating UI Elements"
// Event listener to add function to existing HTML DOM element
/* Function called by event listener */
function geoPerformAction(e) {

    // Friends helped with getting API data
    getGeoApiData('http://api.geonames.org/postalCodeSearchJSON?postalcode=', document.getElementById('input1').value, geoApiUn)
    .then( (APIarrGeo) => {
        postGeoData('/geoadd', { Lat:  APIarrGeo[1], Lon: APIarrGeo[0], Pla: APIarrGeo[2] });
    })
  
    .then(function (){
        updateUIGeo();
        })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getGeoApiData = async (apiURL, place, geoApiUn) => {
    const response = await fetch(apiURL + place + '&maxRows=10&username=' + geoApiUn);
    try {
        const geowebData = await response.json();
        Long = geowebData.postalCodes[0].lng;
        Lat = geowebData.postalCodes[0].lat;
        Pla = geowebData.postalCodes[0].placeName;

        const APIarrGeo = [Long, Lat, Pla];

        return APIarrGeo;
      } 
      catch (error) {
        console.log("error", error);
    }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveGeoData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allDataGeo = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postGeoData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const geonewData = await response.json();
      return geonewData;
    }catch(error) {
    console.log("error", error);
    }
};
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIGeo = async () => {
    const georequest = await fetch('/geoall')
    try{
        const georecRec = await georequest.json();
        console.log(georecRec);
        document.getElementById('lat').innerHTML =  georecRec.Lat;
        document.getElementById('lon').innerHTML =  georecRec.Lon;
        document.getElementById('place').innerHTML =  georecRec.Pla;

      }catch(error){
        console.log("error",error)
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

    // Friends helped with getting API data
    getWeaApiData('https://api.weatherbit.io/v2.0/forecast/daily?&lat=', document.getElementById('lat').textContent, document.getElementById('lon').textContent, document.getElementById('input2').value, document.getElementById('input3').value,  weaApiKey)
    .then( (APIarrWea) => {
        postWeaData('/weaadd', { Max:  APIarrWea[0], Min: APIarrWea[1] });
    })
  
    .then(function (){
        updateUIWea();
        })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getWeaApiData = async (apiURL, lat, lon, startDate, endDate, APIkey) => {
    const response = await fetch(apiURL + lat + '&lon=' + lon + '&start_date=' + startDate + '&end_date=' + endDate + '&key=' + APIkey) ;
    try {
        const webDataWea = await response.json();
        max = webDataWea.data[0].max_temp;
        min = webDataWea.data[0].min_temp;

        const APIarrWea = [max, min];

        return APIarrWea;
      } 
      catch (error) {
        console.log("error", error);
    }
}


/* Function to GET Project Data */
//Help From "Async GET"
const retrieveWeaData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allDataWea = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postWeaData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const WeanewData = await response.json();
      return WeanewData;
    }catch(error) {
    console.log("error", error);
    }
};
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIWea = async () => {
    const request = await fetch('/weaall')
    try{
        const recweaRec = await request.json();
        console.log(recweaRec);
        document.getElementById('maxtemp').innerHTML =  'Predicted Highest Temperature: ' + Math.round((recweaRec.Max*1.8) + 32) + '&#8457;';
        document.getElementById('mintemp').innerHTML = 'Predicted Lowest Temperature: ' + Math.round((recweaRec.Min*1.8)  + 32) + '&#8457;';

      }catch(error){
        console.log("error",error)
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
    getPixApiData(pixApiKey,  document.getElementById("place").textContent)
    .then( (pic) => {
        postPixData('/weaadd', { Pic: pic });
    })
  
    .then(function (){
        updateUIPix();
        })
}

//Friend helped with me with get API data
/* Function to GET Web API Data*/
const getPixApiData = async ( key, picImg ) => {
    const pixresponse = await fetch('https://pixabay.com/api/?key=' + key + '&q=' + picImg );
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
const retrievePixData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//Help from "Async GET"
/* Function to POST data */
const postPixData = async ( url = '', data = {})=>{

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
    }catch(error) {
    console.log("error", error);
    }
};
//Update the index page
//Help From "Updating UI Elements"
//THis is all the way in the bottom
const updateUIPix = async () => {
    const request = await fetch('/weaall')
    try{
        const recPixRec = await request.json();
        console.log(recPixRec);
        document.getElementById('imagep').src =  recPixRec.Pic;

      }catch(error){
        console.log("error",error)
    }
}



const handleCountdown = () => {
  const startDate = new Date(document.getElementById('input2').value);
  const endDate = new Date(document.getElementById('input3').value);

  const time = new Date();
  const countdown = Math.ceil(startDate - time);

  const tripLength = endDate.getTime() - startDate.getTime();
 
  document.getElementById('countdown').textContent = Math.ceil(countdown / 8.64e7) + ' Days to go!';
 

 document.getElementById('LoT').textContent =  tripLength / 8.64e7 + ' Day trip.';
   

};



async function clickIt(event) {
 try {
  
  weaPerformAction();
  pixPerformAction();
  handleCountdown();
}
catch (err) {
  console.log('fetch failed', err);
}

}

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




export { pixClick, weaClick, geoClick }
