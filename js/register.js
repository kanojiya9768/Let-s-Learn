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
  
  document.getElementById("Register_form").addEventListener("submit", signup);
  
  
  //signup user
  function signup(e) {
    e.preventDefault();
  
    //get email and password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("c_password").value;
  
    if(password === cpassword){
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed up successfully
        document.getElementById('alertBox').style.display = 'flex';
        document.getElementById('Register_form').style.display = 'none';
      
        // ...
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.log(errorMessage);

        document.getElementById('alertBox').style.display = 'flex';
        document.getElementById('alert_message').innerHTML = "😩" + " " + errorMessage;
        document.getElementById('btn1').style.display = 'none';
        document.getElementById('Register_form').style.display = 'none';
      });
    }else{
      document.getElementById('alertBox').style.display = 'flex';
      document.getElementById('alert_message').innerHTML = "😩" + " " + "You Have Entered Both The Password defferent Make Sure U Enter Same Password..!";
      document.getElementById('btn1').style.display = 'none';
      document.getElementById('Register_form').style.display = 'none';
    }
  }