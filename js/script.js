var loginBtn = document.getElementById('loginBtn');

var email = document.getElementById('email');
var password = document.getElementById('password');

var successMSG = document.getElementById('successMSG');

loginBtn.addEventListener('click', function () {

    if (!email.value == '' || !password.value == '') {
        ValidateCredentials(email.value, password.value);
    }
    else {
        alert('Please fill all fields');

        successMSG.innerHTML = 'Please fill all fields';
        successMSG.style.color = 'red';
        successMSG.style.display = 'block';
    }
});

function ValidateCredentials(email, password) {
    var usersList = JSON.parse(localStorage.getItem('usersList'));
    if (usersList == null) {
        alert('No users found');
        return false;
    }

    var isUserFound = false;

    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email == email && usersList[i].password == password) {
            isUserFound = true;
            successMSG.innerHTML = 'Login successful';
            successMSG.style.color = 'green';
            successMSG.style.display = 'block';

            localStorage.setItem('currentUser', JSON.stringify(usersList[i]));
            
            window.location.href = 'home.html';
            break;
        }
    }

    if (!isUserFound) {    
        successMSG.innerHTML = 'Invalid credentials';
        successMSG.style.color = 'red';
        successMSG.style.display = 'block';
    }
}