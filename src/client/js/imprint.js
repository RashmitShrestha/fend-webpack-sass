const valUrl = require('valid-url');
// installed from npm but idea gotten from JZerman
//Code Academy in the Back-End section helped tons after looking at other people's code

           //Utilized from my Last Project

    const getApiData = async (url, input) => {
        const res = await fetch('/end', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: input})
        });
        try {
           //Utilized from my Last Project -  Weather Project
            const data = await res.json();
                document.getElementById('pol').innerHTML = data.polarity;
                document.getElementById('polcon').innerHTML = data.polarity_confidence;
                document.getElementById('sub').innerHTML = data.subjectivity;
                document.getElementById('subcon').innerHTML = data.subjectivity_confidence;
                document.getElementById('orURL').innerHTML = data.text;
            
            } catch(error) {
console.log("error")            }
        }

        const whenSubmit = function(event) {
            let formText = document.getElementById('name').value;
                // check for valid url
                if (Client.valUrl.isWebUri(formText)) {
                  Client.getApiData('/article', formText);
                }
            };
export { whenSubmit, valUrl, getApiData }