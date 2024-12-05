var signupBtn = document.getElementById("signupBtn");

var username = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

var successMSG = document.getElementById('successMSG');

var usersList = [];

signupBtn.addEventListener('click', function () {
    CheckVal(username.value, email.value, password.value);
});

function CheckVal(username, email, password) {
    if (username == '' || email == '' || password == '') {
       
        successMSG.innerHTML = 'Please fill all fields';
        successMSG.style.color = 'red';
        successMSG.style.display = 'block';

    } else {
        ValidateEmail(email);
    }
}


function ValidateEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email) == true) {
        CheckEmailPresence(email);
    }
    else {
        
        successMSG.innerHTML = 'Invalid email';
        successMSG.style.color = 'red';
        successMSG.style.display = 'block';
    }
}


function InsertDataIntoList(username, email, password) {
    var userdata = {
        username: username,
        email: email,
        password: password
    };

    if (JSON.parse(localStorage.getItem('usersList')) == null ||
        JSON.parse(localStorage.getItem('usersList') == undefined)) {
        usersList = [];
    }

    usersList.push(userdata);

    localStorage.setItem('usersList', JSON.stringify(usersList));
    
    successMSG.innerHTML = 'User registered successfully';
    successMSG.style.display = 'block';
    successMSG.style.color = 'green';
}

function CheckEmailPresence(email) {
    var isEmailPresent = false;
    
    if (JSON.parse(localStorage.getItem('usersList')) != null
        || JSON.parse(localStorage.getItem('usersList')) != undefined) 
    {
        usersList = JSON.parse(localStorage.getItem('usersList'));

        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].email == email) {
                
                successMSG.innerHTML = 'Email already registered ' + email;
                successMSG.style.display = 'block';
                successMSG.style.color = 'red';
                successMSG.style.display = 'block';
                isEmailPresent = true;
                break;
            }
        }

        if (!isEmailPresent) {
            InsertDataIntoList(username.value, email, password.value);
        }
    }
    else {
        InsertDataIntoList(username.value, email, password.value);
    }
}