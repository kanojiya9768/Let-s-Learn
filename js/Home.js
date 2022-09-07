//get user and make profile and if user is not logged in logout him automatically
let current_user = JSON.parse(localStorage.getItem('user'));

//set profile

if(!current_user){
    window.location.assign('index.html');
}else{
    document.getElementById('current_user_of_the_site').innerText = current_user;
}


//logout functionality
let logout = () =>{
    localStorage.removeItem('user');
    window.location.assign('index.html');

    function noBack() {
        window.history.forward()
    }
    noBack();
    window.onload = noBack;
    window.onpageshow = function (evt) { if (evt.persisted) noBack() }
    window.onunload = function () { void (0) }
}
