
let distance = Number(prompt(" Distance in km:"));


let transport = prompt(" Transport type (Bus / Train / Taxi):");


let farePerKm;
switch (transport.toLowerCase()) {
    case "bus":
        farePerKm = 3;
        break;
    case "train":
        farePerKm = 5;
        break;
    case "taxi":
        farePerKm = 10;
        break;
    default:
        alert("Invalid transport type!");
        farePerKm = 0;
}


let totalFare = distance * farePerKm;


if (farePerKm > 0) {
    alert("Total Fare: " + totalFare);
}
