function uniClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "universityGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    universityGraph();
}

function pharmaClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "pharmaGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    pharmaGraph();
}

function telecomClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "telecomGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    telecomGraph();
}

function clothingClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "clothingGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    clothingGraph();
}

function housingClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "housingGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    housingGraph();
}

function foodClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "foodGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    foodGraph();
}

function insuranceClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementById("myAreaGraph");
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "insuranceGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    oneButton();
    insuranceGraph();
}

function areaClick() {
    var chartContainer = document.getElementById("chartContainer");
    var oldCanvas = document.getElementsByClassName("currentGraph")[0];
    chartContainer.removeChild(oldCanvas);

    var newCanvas = document.createElement("canvas");
    newCanvas.id = "myAreaGraph";
    newCanvas.className = "currentGraph";
    chartContainer.appendChild(newCanvas);
    areaGraph();
    multiButton();
}

function multiButton() {
    var buttonsContainer = document.getElementById("buttonsContainer");

    // Create the buttons
    var uniButton = document.createElement("button");
    uniButton.id = "UNIbutton";
    uniButton.className = "categoryButton";
    uniButton.innerHTML = "University Costs Using C.P.I.";
    uniButton.onclick = uniClick;

    var pharmaButton = document.createElement("button");
    pharmaButton.id = "PHARMAbutton";
    pharmaButton.className = "categoryButton";
    pharmaButton.innerHTML = "Pharmaceutical Costs Using C.P.I.";
    pharmaButton.onclick = pharmaClick;

    var telecomButton = document.createElement("button");
    telecomButton.id = "TELECOMbutton";
    telecomButton.className = "categoryButton";
    telecomButton.innerHTML = "Telecommunication Costs Using C.P.I.";
    telecomButton.onclick = telecomClick;

    var clothingButton = document.createElement("button");
    clothingButton.id = "CLOTHINGbutton";
    clothingButton.className = "categoryButton";
    clothingButton.innerHTML = "Clothing and Footwear Costs Using C.P.I.";
    clothingButton.onclick = clothingClick;

    var housingButton = document.createElement("button");
    housingButton.id = "HOUSINGbutton";
    housingButton.className = "categoryButton";
    housingButton.innerHTML = "Rental Costs Using C.P.I.";
    housingButton.onclick = housingClick;

    var foodButton = document.createElement("button");
    foodButton.id = "FOODbutton";
    foodButton.className = "categoryButton";
    foodButton.innerHTML = "Food Costs Using C.P.I.";
    foodButton.onclick = foodClick;

    var insuranceButton = document.createElement("button");
    insuranceButton.id = "INSURANCEbutton";
    insuranceButton.className = "categoryButton";
    insuranceButton.innerHTML = "Insurance Costs Using C.P.I.";
    insuranceButton.onclick = insuranceClick;

    // Remove the area button
    var areaButton = document.getElementById("AREAbutton");
    buttonsContainer.removeChild(areaButton);

    // Add the buttons
    buttonsContainer.appendChild(uniButton);
    buttonsContainer.appendChild(pharmaButton);
    buttonsContainer.appendChild(telecomButton);
    buttonsContainer.appendChild(clothingButton);
    buttonsContainer.appendChild(housingButton);
    buttonsContainer.appendChild(foodButton);
    buttonsContainer.appendChild(insuranceButton);
}

function oneButton() { // get the parent div
    var buttonsContainer = document.getElementById("buttonsContainer");

    // Create the Area Button
    var areaButton = document.createElement("button");
    areaButton.id = "AREAbutton";
    areaButton.className = "categoryButton";
    areaButton.innerHTML = "Back to Total Expenditures";
    areaButton.onclick = areaClick;

    // Remove existing buttons
    var uniButton = document.getElementById("UNIbutton");
    buttonsContainer.removeChild(uniButton);

    var pharmaButton = document.getElementById("PHARMAbutton");
    buttonsContainer.removeChild(pharmaButton);

    var telecomButton = document.getElementById("TELECOMbutton");
    buttonsContainer.removeChild(telecomButton);

    var clothingButton = document.getElementById("CLOTHINGbutton");
    buttonsContainer.removeChild(clothingButton);

    var housingButton = document.getElementById("HOUSINGbutton");
    buttonsContainer.removeChild(housingButton);

    var foodButton = document.getElementById("FOODbutton");
    buttonsContainer.removeChild(foodButton);

    var insuranceButton = document.getElementById("INSURANCEbutton");
    buttonsContainer.removeChild(insuranceButton);

    // Add the new button
    buttonsContainer.appendChild(areaButton);

}
