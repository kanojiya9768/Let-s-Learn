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




// set the email id default value of the email input of contact us page
document.getElementById('email').value = current_user;





// checking the online offline event on site 
window.addEventListener('online',()=>{
    let text = document.getElementById('on_offline');
    text.style.display = 'block';
    text.style.color = 'lime';
    text.innerText = 'You Are Back Online.'
    
    setTimeout(()=>{
        text.style.display = 'none';
    },4000)
})

window.addEventListener('offline',()=>{
    let text = document.getElementById('on_offline');
    text.style.display = 'block';
    text.style.color = 'red';
    text.innerText = 'You Are Offline.'
    
    setTimeout(()=>{
        text.style.display = 'none';
    },4000)
})
