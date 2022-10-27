function calculate() {
    //Get number from user input by HTML id: "inputNumber"
    let inputNumber = parseInt(document.getElementById("inputNumber").value);

    //Make random number for opponent
    let randomNumber = parseInt(Math.random() * 10);
    let resultMsg = "";

    //Change result message based on which number is higher/lower
    if (inputNumber > randomNumber) {
        resultMsg = "Your number is higher."
    } else if (inputNumber === randomNumber) {
        resultMsg = "You chose the exact same number! You win!"
    } else {
        resultMsg = "Your number is lower."
    }

    //Print result
    document.getElementById("result").innerHTML = resultMsg
    document.getElementById("userNumber").innerHTML = "your number: " + inputNumber.toString()
    document.getElementById("randomNumber").innerHTML = "opponent number: " + randomNumber.toString()
}

//Fetch data from local .json file
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Save .json data in 2 parts
        let basicInfo = data["basic-info"]
        let workInfo = data["work-info"]

        //Initialize string variables
        let basicInfoText = ""
        let workInfoText = ""

        //Save html strings in these variables
        basicInfoText += "Name: " + basicInfo.name + "</br>";
        basicInfoText += "Age: " + basicInfo.age + "</br>";
        basicInfoText += "City: " + basicInfo.city + "</br>";


        //In order to print out every element in the 'professions' Array a for loop is used.
        workInfoText += "Professions:<ul> "
        for (let x = 0; x < workInfo.professions.length; x++) {
            workInfoText += "<li>" + workInfo.professions[x] + "</li>";
        }
        workInfoText += "</ul>"

        //In order to print out every element in the 'workplaces' Array a for loop is used.
        workInfoText += "Workplaces:<ul> "
        for (let x = 0; x < workInfo.workplaces.length; x++) {
            workInfoText += "<li>" + workInfo.workplaces[x] + "</li>";
        }
        workInfoText += "</ul>"

        //Send the text strings to the HTML page
        document.getElementById("work-info-html").innerHTML = workInfoText
        document.getElementById("basic-info-html").innerHTML = basicInfoText;
    })

    //Logs here in case of error
    .catch(function (err) {
        console.log(err);
    });
