// //get user object
// console.log(user);

// //booleans that will let user submit if true
// let emailBool=false;
// let nameBool=false;

// //get current date
// const date = new Date();

// //get second p tag for error message
// let p = document.getElementsByTagName("div")[1];

// //get user date
// let checkinDate = new Date(document.getElementById("myStart").value);
// try {
//     //see if they are selecting a date in the past and creat error message
//     if(checkinDate.getDay()<date.getDay()) throw "Your check in date can't be in the past";
// } catch (error){
//     //add paragraph containing error if the if statment is correct
//     p.innerHTML=("afterend", "<p>"+ error + "</p>");
// }

// //check to see if date is not in winter
// if (date.getMonth !== 11 || date.getMonth !== 12 || date.getMonth !== 1) {
//     //give window alert to let user know they cant submit the form
//     window.alert("We only accpet applications in winter (November, December, January).");
// }


// //case 4
// //get email from user
// user.email; //changed this so it gets it from new object file

// //verification variable
// let verify = /@gmail.com$/g;

// //get id of where to insert submit button after
// let insert = document.getElementById("comments");

// email.onchange=function(){
//     //see if email contains domain
// if (verify.test(email.value)) {
//     //display error message
//     insert.insertAdjacentHTML("afterend","Email can't be from gmail").style.color="red";
// }
// else
// {
//     //set bool to true
//     emailBool=true;
// }
// }



// //case 5
// //get budget
// budget=user.budget;
// //select room based on budget
// if (budget==100) {
//     getElementById("myRoom").value=100
// }
// else {
//     getElementById("myRoom").value=50;
// }

// //get name
// let name =user.name;

// //verification rule to see if there are any numbers
// let numVerify=/\d/g;

// email.onchange=function(){
//     //see if name has numbers
// if (numVerify.test(email.value)) {
//     //display error message
//     insert.insertAdjacentHTML("afterend","Name can't have number").style.color="red";
// }
// else {
//     //set bool to true
//     nameBool=true;
// }
// }

// //see if user can submit
// if (emailBool&&nameBool==true) {
//     insert.insertAdjacentHTML("afterend","<label for='submit'> </label><input id='submit' type='submit' value='Apply Now'>");
// }
