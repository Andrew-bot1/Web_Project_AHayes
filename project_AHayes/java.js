//get current date
const date = new Date();

//get second p tag for error message
let p = document.getElementsByTagName("div")[1];

//get user date
let checkinDate = new Date(document.getElementById("myStart").value);
try {
    //see if they are selecting a date in the past and creat error message
    if(checkinDate.getDay()<date.getDay()) throw "Your check in date can't be in the past";
} catch (error){
    //add paragraph containing error if the if statment is correct
    p.innerHTML=("afterend", "<p>"+ error + "</p>");
}

//check to see if date is not in winter
if (date.getMonth !== 11 || date.getMonth !== 12 || date.getMonth !== 1) {
    //give window alert to let user know they cant submit the form
    window.alert("We only accpet applications in winter (November, December, January).");
}


//case 4
//get email from user
let email = document.getElementById("myEmail").value;
//verification variable
let verify = /@gmail.com$/g;

//get id of where to insert submit button after
let insert = document.getElementById("comments");

//see if email contains domain
if (verify.test(email)) {
    //display error message
    insert.insertAdjacentHTML("afterend","Email can't be from gmail").style.color="red";
}
else
{
    //allow user to submit
    insert.insertAdjacentHTML("afterend","<label for='submit'> </label><input id='submit' type='submit' value='Apply Now'>");
}
