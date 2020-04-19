const valUrl = require('valid-url');
// installed from npm but idea gotten from JZerman
const whenSubmit = function (event) {

let formText = document.getElementById('name').value;
    // check for valid url
    if (valUrl.isWebUri(formText)) {
      getApiData('/end', formText);
    } else {
        document.getElementById('error').innerHTML = 'Please Enter a Valid URL.';
        }
};

    const getApiData = async (url, input) => {
        const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: input})
        });
        try {
            const data = await res.json();
            if(res.status >= 200 && res.status < 400) {
                //const list = document.createElement('li');
                document.getElementById('pol').innerHTML = data.polarity;
                document.getElementById('polcon').innerHTML = data.polarity_confidence;
                document.getElementById('sub').innerHTML = data.subjectivity;
                document.getElementById('subcon').innerHTML = data.subjectivity_confidence;
                document.getElementById('orURL').innerHTML = data.text;
            }
            } catch(error) {
console.log("error")            }
        }

export { whenSubmit, valUrl, getApiData }