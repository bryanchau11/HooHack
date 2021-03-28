 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAdjo3bQmZ3irfMS8lPOX4ytXM4g4jm8NA",
    authDomain: "hoohack-a4b13.firebaseapp.com",
    projectId: "hoohack-a4b13",
    storageBucket: "hoohack-a4b13.appspot.com",
    messagingSenderId: "725227209207",
    appId: "1:725227209207:web:26b9c58b24ebd5a1c2aef2"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const first_name = document.getElementById("fname");
 const last_name = document.getElementById("lname");
 const saveInfo = document.getElementById("saveInfo");
 const country = document.getElementById("country");
  const date_of_birth = document.getElementById("dob");
function Ready(){
    fname: document.getElementById("fname").value;
    lname: document.getElementById("lname").value;
    email_fb: document.getElementById("email").value;
  country: document.getElementById("country").value;
}
/* document.getElementById('saveInfo').onclick = function() {
    Ready();
     firebase.database().ref('Users/' + date_of_birth.value).push().set({
            first_name: fname,
            last_name: lname,
            user_email: email_fb,
            user_country: country
     });
 } */
 var currentUser = firebase.auth().currentUser;
 function saveData(){
    
    firebase.database().ref("Users").push().set({
        fname: document.getElementById("fname").value,
         lname: document.getElementById("lname").value,
       email_fb: document.getElementById("email").value,
       country: document.getElementById("country").value
       
     });
     alert("Signed Up and Information is saved");
} 
/*const database = firebase.database();
const root = database.ref('users');
function saveData(){
    root.child(email.value).set({
        firstname = first_name.value,
        lastname = last_name.value,
        user_email = email.value,
        user_country = country.value
    });
    alert("Signed Up and Information is saved");
};
   */
const auth = firebase.auth();
 function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
     
     firebase.database().ref("Users").push().set({
        fname: document.getElementById("fname").value,
         lname: document.getElementById("lname").value,
       email_fb: document.getElementById("email").value,
       country: document.getElementById("country").value,
       dateOfBirth: document.getElementById("dob").value
     });
     alert("Signed Up and Information is saved");


 }

 function logIn() {

     var email = document.getElementById("emailLogIn");
     var password = document.getElementById("passwordLogIn");

     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));


 }

 auth.onAuthStateChanged(function(user) {

     if (user) {

         var email = user.email;
         

         //Take user to a different or home page
         window.location = "index.html";
         //is signed in

     } else {

         alert("No Active User");
         //no user is signed in

     }



 });
