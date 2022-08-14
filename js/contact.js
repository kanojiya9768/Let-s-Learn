const firebaseConfig = {
    apiKey: "AIzaSyDnJTqyRaIao5oGAhP00HmZ2vE9CTCsBpU",
    authDomain: "vishalportfolio-e5d4b.firebaseapp.com",
    databaseURL: "https://vishalportfolio-e5d4b-default-rtdb.firebaseio.com",
    projectId: "vishalportfolio-e5d4b",
    storageBucket: "vishalportfolio-e5d4b.appspot.com",
    messagingSenderId: "547693392796",
    appId: "1:547693392796:web:2bc5657863517ac482ce59",
    measurementId: "G-NX05ZDMFBS"
  };


  //initialize the firebase
  firebase.initializeApp(firebaseConfig);


  //reference our database
var ContactFormDb =  firebase.database().ref('massages');

document.getElementById('contact_form').addEventListener('submit',submitform);

//store all data on a variables on submit
function submitform(e){
    e.preventDefault();

    //getdata contact form one by one and store
    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number');
    var massage = getElementVal('message');


    //call savemassage function so that our data can stored in database
    saveMassage(name,email,number,massage);
    
    document.getElementById('contact_heading').style.display = 'none';
    document.getElementById('contact_caption').style.display = 'none';
    document.getElementById('contact_us').style.display = 'none';
    document.getElementById('alertBox').style.display = 'flex';

}



//now store contact form data in variables data in database
const saveMassage = (name,email,number,massage) =>{
    var newContactForm = ContactFormDb.push();


    newContactForm.set({
        name : name,
        email : email,
        number : number,
        massages : massage
    });
};


// get input data by id 
const getElementVal = (id) =>{
    return document.getElementById(id).value;
};