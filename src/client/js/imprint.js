const valUrl = require('valid-url');
// installed valid-url from npm but idea gotten from JZerman
//Code Academy in the Back-End section helped tons after looking at other people's code

//Utilized from my Last Project

const getApiData = async (url, input) => {
    const res = await fetch('/article', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },


        body: JSON.stringify({
        text: input
        })
    });
    try {
        //Utilized from my Last Project -  Weather Project

        const output = await res.json();

        document.getElementById('pol').innerHTML = output.polarity;
        document.getElementById('polcon').innerHTML = output.polarity_confidence;
        document.getElementById('sub').innerHTML = output.subjectivity;
        document.getElementById('subcon').innerHTML = output.subjectivity_confidence;
        document.getElementById('orURL').innerHTML = output.text;

    } catch (error) {
        console.log("error")
    }
}
//In order to validate URL entered
const whenSubmit = function (event) {
    event.preventDefault();

    const name =  document.getElementById('name')
    let input = name.value;
    const pageBody =  document.getElementsByTagName('body');

    // check for valid url
    if (valUrl.isWebUri(input)) {
        //Tried putting in the original url for /article to solve problem
        getApiData('http://localhost:2111/article', input);
        document.getElementById("notValid").innerHTML = "";
  //Help from w3Schools
    } else {
document.getElementById("notValid").innerHTML = "The URL you entered is invalid, please but a different one";
pageBody.style.backgroundColor = "red";
}
  //Help from w3Schools
whenSubmit;
    };
export { whenSubmit, valUrl, getApiData }