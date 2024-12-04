var signupBtn=document.getElementById("signupBtn");

var username=document.getElementById("name");
var email=document.getElementById("email");
var password=document.getElementById("password");


var userdata={
    username:username.value,
    email:email.value,
    password:password.value
}

var userslist=[]

signupBtn.addEventListener('click', function()
{
    var isFullData=CheckVal(username.value,
        email.value,
        password.value
    )

    if(isFullData)
    {
        var isEmailValid=ValidateEmail(email.value)
        console.log('email is '+email.value)
        console.log("Email validation "+isEmailValid)

        if(isEmailValid)
        {
            InsertDataIntoList(username.value,email.value,password.value)
        }
        else
        {            
            alert("Enter a valid email xxxxxx@xxxxx.com")
        }
    }
    else
    {
        alert('Please fill all fields')
    }
})

function CheckVal(username,email,password)
{
    if(username==''
        || email==''
        || password=='')
    {
        return false;
    }
    else 
        return true;    
}

function ValidateEmail(email)
{
    var regex=/^([A-Z]|[a-z]){1,20}\@[a-z]{3,10}\.com$/
        if(regex.test(email)==true)
    {
        return true;
    }
    else
        return false;
}

function InsertDataIntoList(username,email,password)
{
    userdata.email=email
    userdata.username=username
    userdata.password=password

    userslist.push(userdata)
    localStorage.setItem('userlist',JSON.stringify(userslist))
}