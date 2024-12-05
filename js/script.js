var loginBtn=document.getElementById('loginBtn');

var email=document.getElementById('email');
var password=document.getElementById('password');

loginBtn.addEventListener('click',function(){
    var isFullData=CheckVal(email.value,password.value);
    console.log('isFullData '+isFullData);
    if(isFullData)
    {
        var isCredValid=ValidateCredentials(email.value,password.value);
        if(isCredValid)
        {
            alert('Login successful');
            window.location.href='home.html';
        }
        else
        {
            alert('Invalid credentials');
        }
    }
    else
    {
        alert('Please fill all fields');
    }
});


function CheckVal(email,password)
{
    if(email=='' || password=='')
    {
        return false;
    }
    else
        return true;
}

function ValidateCredentials(email,password)
{
    console.log('Validating credentials');
    var userslist=JSON.parse(localStorage.getItem('userlist'));
    var isUserFound=false;
    for(var i=0;i<userslist.length;i++)
    {
        if(userslist[i].email==email && userslist[i].password==password)
        {
            isUserFound=true;
            console.log('User found');
            break;
        }
    }

    if(isUserFound)
    {        
        console.log('GGG User found');
        return true;
    }
    else
    {
        return false;
    }
}