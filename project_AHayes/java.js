//get current date
const date = new Date();

//check to see if date is not in winter
if (date.getMonth !== 11 || date.getMonth !== 12 || date.getMonth !== 1) {
    //give window alert to let user know they cant submit the form
    window.alert("We only accpet applications in winter (November, December, January).");
}