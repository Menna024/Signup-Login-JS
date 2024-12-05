var welcome=document.getElementById('welcome');
var currentUser = JSON.parse(localStorage.getItem('currentUser'));


if(currentUser!=null){
    welcome.innerHTML='Welcome '+currentUser.username;
}

var logoutBtn=document.getElementById('logout');

logoutBtn.addEventListener('click',function(){
    alert(logoutBtn.innerHTML)
    alert('logout');
    console.log('Redirecting to index.html');
    window.location.href = 'index.html';
    // localStorage.removeItem('currentUser');

});