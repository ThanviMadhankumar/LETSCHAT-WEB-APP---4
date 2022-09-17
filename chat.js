// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhatt0gW5lpfJpwZ9GH8-0XSH-YL_fKX0",
    authDomain: "letschat-web-app---part-ea948.firebaseapp.com",
    databaseURL: "https://letschat-web-app---part-ea948-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---part-ea948",
    storageBucket: "letschat-web-app---part-ea948.appspot.com",
    messagingSenderId: "166523486669",
    appId: "1:166523486669:web:5bd1aee4f61a56a6b68484"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   

    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}

