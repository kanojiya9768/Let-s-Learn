const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDnJTqyRaIao5oGAhP00HmZ2vE9CTCsBpU",
    authDomain: "vishalportfolio-e5d4b.firebaseapp.com",
    databaseURL: "https://vishalportfolio-e5d4b-default-rtdb.firebaseio.com",
    projectId: "vishalportfolio-e5d4b",
    storageBucket: "vishalportfolio-e5d4b.appspot.com",
    messagingSenderId: "547693392796",
    appId: "1:547693392796:web:2bc5657863517ac482ce59",
    measurementId: "G-NX05ZDMFBS",
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

//generate captcha
let allValue = ['A','@','#','$','^','&','!','a','b','A','@','#','$','^','&','!','B','C','c','f','e','d','m','n','n','w','x','y','z','A','@','#','$','^','&','!','D','E','F','G','H','I','g','h','i','j','k','l','J','K','L','M','N','O','P','Q','A','@','#','$','^','&','!','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','o','p','q','r','s','t','u','v',];

let cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
let cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
let cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
let cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
let cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
let cVal6 = allValue[Math.floor(Math.random() * allValue.length)];

let cValue = cVal1+cVal2+cVal3+cVal4+cVal5+cVal6;
let captcha = document.getElementById('catchaval').innerHTML = cValue;

//signin user
document.getElementById("Login").addEventListener("submit", signin);
function signin(e) {
 e.preventDefault();

 //get email and password
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 let input_captcha = document.getElementById('captcha_input').value;
 let captcha_val = captcha.valueOf();



 if(captcha===input_captcha){
   firebase
   .auth()
   .signInWithEmailAndPassword(email, password)
   .then((result) => {
     // Signed in
     
     document.getElementById('alertBox').style.display = 'flex';
     document.getElementById('alert_error_msg').innerHTML = "😀 Logged In Successfully..!";
     document.getElementById('btn1').style.display = 'none';
     document.getElementById('Okay_link_alert').href = 'Home.html';
     document.getElementById('Login').style.display = 'none';

    //  setInterval(()=>{
    //   window.location.assign('Home.html');
    //  },2000);

     // ...
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorMessage);

     document.getElementById('alertBox').style.display = 'flex';
     document.getElementById('Login').style.display = 'none';
   });
 }else{
   alert("Invalid Captcha.!");
   window.location.reload();
 }
}