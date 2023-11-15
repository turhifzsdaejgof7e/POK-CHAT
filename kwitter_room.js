//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
      apiKey: "AIzaSyAi_j_a0ghIWdmhl7lcd46goth41u7yHaQ",
      authDomain: "chatapp-e23da.firebaseapp.com",
      databaseURL: "https://chatapp-e23da-default-rtdb.firebaseio.com",
      projectId: "chatapp-e23da",
      storageBucket: "chatapp-e23da.appspot.com",
      messagingSenderId: "456506140663",
      appId: "1:456506140663:web:9de899dae168ae7327f0f2"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de sala"
      });

      localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("Nombre de la sala: " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name", name);   
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}






























