//get current date
const date = new Date();

//get second p tag for error message
const p = document.getElementByTag[2]("div");


//get user date
let checkinDate = new Date(document.getElementById("myStart").value);
try {
    //see if they are selecting a date in the past and creat error message
    if(checkinDate.getDay()<date.getDay()) throw "Your check in date can't be in the past";
} catch (error){
    //add paragraph containing error if the if statment is correct
    p.insertAdjacentHTML("afterend", "<p>"+ error + "</p>");
}






//check to see if date is not in winter
if (date.getMonth !== 11 || date.getMonth !== 12 || date.getMonth !== 1) {
    //give window alert to let user know they cant submit the form
    window.alert("We only accpet applications in winter (November, December, January).");
}