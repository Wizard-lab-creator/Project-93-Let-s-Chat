
var firebaseConfig = {
      apiKey: "AIzaSyDyeG0qxHvwtJclIrI6qR9OYTIyb675cPI",
      authDomain: "kwitter-f69db.firebaseapp.com",
      databaseURL: "https://kwitter-f69db-default-rtdb.firebaseio.com",
      projectId: "kwitter-f69db",
      storageBucket: "kwitter-f69db.appspot.com",
      messagingSenderId: "570370107002",
      appId: "1:570370107002:web:ada4bb25c65c2d6a2ffdc3",
      measurementId: "G-KMKTV2PKEK"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
