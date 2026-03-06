let birthYear = prompt("Enter your birth year:");
let city = prompt("Where do you live?");
let favoriteSport = prompt("What is your favorite sport?");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
let cityMessage;
switch (city.toLowerCase()) {
    case "kyiv":
        cityMessage = "You live in the capital of Ukraine";
        break;
    case "washington":
        cityMessage = "You live in the capital of USA";
         break;
    case "london":
        cityMessage = "You live in the capital of UK";
        break;
    default:
        cityMessage = `You live in the city of ${city}`;
}
alert(`Your age: ${age}. ${cityMessage} .Your favorite sport: ${favoriteSport}`);