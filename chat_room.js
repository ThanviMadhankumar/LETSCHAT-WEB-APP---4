
const firebaseConfig = {
    apiKey: "AIzaSyCKkVXAmmZGpCBggyEbT9Zb3ZCG2ZARe1M",
    authDomain: "chat-app-746dc.firebaseapp.com",
    databaseURL: "https://chat-app-746dc-default-rtdb.firebaseio.com",
    projectId: "chat-app-746dc",
    storageBucket: "chat-app-746dc.appspot.com",
    messagingSenderId: "13425254608",
    appId: "1:13425254608:web:0d4cd8ae5e911155657ed5"
  };
  
  
user_name = localStorage.getItem("user_name"); 

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()  
  {
        room_name = document.getElementById("room_name").ariaValueMax;

        firebase.database().ref("/").child(room_name).update({ 
              purpose : "adding room name"     
        });

        localStorage.setItem("room_name" , room_name);

        window.location = "chat_room.html";
  }


function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location = "chat_room.html";
}



function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "index.html";
}