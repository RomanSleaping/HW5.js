// 1
const choice = "tea";
switch (choice) {
    case "coffee":
        console.log("coffee")
        break;
    case "tea":
        console.log("tea")
        break;
    case "juice":
        console.log("juice")
    break;
    default: console.log("nothing")
}
// 2
const day = "Thursday"; 
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("weekday")
        break
    case "Saturday":
    case "Sunday":
    console.log("day off")
    break
    default: console.log(vacation)
}
// 3
const month = 1;
let timeOfYear
switch (month) {
    case 1:
    case 2:
    case 12:
        timeOfYear = "winter";
        break
    case 3:
    case 4:
    case 5:
        timeOfYear = "spring";
        break
    case 6:
    case 7:
    case 8:
        timeOfYear = "summer";
        break
    case 9:
    case 10:
    case 11:
        timeOfYear = "outumn";
        break
        default: timeOfYear = "invalid"
}
console.log(timeOfYear)
// 4
const color = "green";
let effect
switch (color) {
    case "green":
        effect = "Forwads"
        break;
    case "yellow":
        effect = "wait"
        break
    case "red":
        effect = "stop"
        break 
        default: 
        effect = "nothing"
}
console.log(effect)
// 5
const number = 16;
const number2 = 4;
const result = number * number2;
switch (result) {
    case number * number2:
        console.log(result)
        break;
    case number / number2:
        console.log(result)
        break;
    case number + number2:
        console.log(result)
        break;
    case number - number2:
        console.log(result)
        break;
    case number**number2:
        console.log(result)
        break;
    default:
        "have surgery"
}
