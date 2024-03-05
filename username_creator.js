
function getUsername() {
    let firstName = document.querySelector("#firstname");
    let lastName = document.querySelector("#lastname");
    let btn = document.querySelector("#btn");
    let creatorbox = document.querySelector(".creator-box");
    let outputbox = document.querySelector(".output-box");
    let output= document.querySelector(".output");
    creatorbox.style.display ="none";
    outputbox.style.display ="block";
    firstName = firstName.value;
    lastName = lastName.value;
    for (let i = 0; i < firstName.length; i++) {
        if (firstName[i] === " " || (firstName[i] >= 'A' && firstName[i] <= 'Z')) {
            firstName = alert("Your firstName has some spaces or uppercase characters. Please try again...!!!");
            // Restart the loop if there are issues
            i = -1; // Reset the loop counter to check the new full name
        }
    }
    for (let i = 0; i < lastName.length; i++) {
        if (lastName[i] === " " || (lastName[i] >= 'A' && lastName[i] <= 'Z')) {
            lastName = alert("Your lastName has some spaces or uppercase characters. Please try again...!!!");
            i = -1;
        }
    }
    let rand = Math.floor(Math.random()*89)+11;
    let username1,username2,username3,username4,username5;
    username1= `${firstName.slice(0,4)}_${lastName.slice(0,4)}${rand}`;
    rand = Math.floor(Math.random()*89)+11;
    username2= `_${lastName.slice(0,3)}_${firstName.slice(0,5)}${rand}`;
    rand = Math.floor(Math.random()*89)+11;
    username3= `${lastName.slice(0,5)}_${firstName.slice(0,5)}_${rand}`;
    rand = Math.floor(Math.random()*89)+11;
    username4 =`_${firstName}_${lastName.slice(0,3)}_${rand}`;
    rand = Math.floor(Math.random()*89)+11;
    username5 =`_${firstName}_${lastName}${rand}`;
    // let result = [username1,username2,username3,username4,username5];
    // output.value = ` ${result} `;
    // console.log(username1, username2,username3,username4,username5);
}
