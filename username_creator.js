
    // EvenListener for creat username
    document.querySelector('#btn').addEventListener('click', function () {

    // accessing inputs field
    let firstName = document.querySelector("#firstname");
    let lastName = document.querySelector("#lastname");

    firstName = firstName.value;
    lastName = lastName.value;
    console.log(firstName, lastName);
    // loops for checking space between characters
    for (let i = 0; i < firstName.length; i++) {
        if (firstName[i] === " ") {
            firstName = alert("Your firstName has some spaces Please try again...!!!");
            // Restart the loop if there are issues
            i = -1; // Reset the loop counter to check the new full name
        }
    }

    for (let i = 0; i < lastName.length; i++) {
        if (lastName[i] === " ") {
            lastName = alert("Your lastName has some spaces Please try again...!!!");
            i = -1;
        }
    }

    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    let rand = Math.floor(Math.random() * 89) + 11; // creat random numbers between 11-99
    let username1, username2, username3, username4, username5;

    username1 = `${firstName.slice(0, 4)}_${lastName.slice(0, 4)}${rand}`;
    rand = Math.floor(Math.random() * 89) + 11;
    username2 = `_${lastName.slice(0, 3)}_${firstName.slice(0, 5)}${rand}`;
    rand = Math.floor(Math.random() * 89) + 11;
    username3 = `${lastName.slice(0, 5)}_${firstName.slice(0, 5)}_${rand}`;
    rand = Math.floor(Math.random() * 89) + 11;
    username4 = `_${firstName}_${lastName.slice(0, 3)}_${rand}`;
    rand = Math.floor(Math.random() * 89) + 11;
    username5 = `_${firstName}_${lastName}${rand}`;

    let output1 = document.querySelector("#output1");
    let output2 = document.querySelector("#output2");
    let output3 = document.querySelector("#output3");
    let output4 = document.querySelector("#output4");
    let output5 = document.querySelector("#output5");

    output1.innerText = username1;
    output2.innerText = username2;
    output3.innerText = username3;
    output4.innerText = username4;
    output5.innerText = username5;

    let creatorbox = document.querySelector(".creator-box");
    let outputbox = document.querySelector(".output-box");

    creatorbox.style.display = "none";
    outputbox.style.display = "block";
})

    // EventListener on output box to close.
    document.querySelector('.close').addEventListener('click', function () {

    document.querySelector('.output-box').style.display = 'none';
    document.querySelector('.creator-box').style.display = 'block';
});