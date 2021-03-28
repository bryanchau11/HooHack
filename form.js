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

 const auth = firebase.auth();

 function signUp() {

     var email = document.getElementById("email");
     var password = document.getElementById("password");

     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));

     alert("Signed Up");


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