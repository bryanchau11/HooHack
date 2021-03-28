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

 firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("finame").innerHTML = dataSnapShot.val().fname;
           // document.getElementById("userPfSurname").innerHTML = dataSnapShot.val().userSurname;
            // userEmail = dataSnapShot.val().userEmail;
            // userPassword = dataSnapShot.val().userPassword;
           // document.getElementById("userPfFb").setAttribute('href', dataSnapShot.val().userFb);
            //document.getElementById("userPfTw").setAttribute('href', dataSnapShot.val().userTw);
           // document.getElementById("userPfGp").setAttribute('href', dataSnapShot.val().userGp);
            //document.getElementById("userPfBio").innerHTML = dataSnapShot.val().userBio;
        })
    } else {
    //   No user is signed in.
    }
});