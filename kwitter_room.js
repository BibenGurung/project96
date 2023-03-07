var firebaseConfig = {
  apiKey: "AIzaSyAQe8iciLb4nNLBVOg53xMMcQeJKR4lh7I",
  authDomain: "letschat-d666d.firebaseapp.com",
  databaseURL: "https://letschat-d666d-default-rtdb.firebaseio.com",
  projectId: "letschat-d666d",
  storageBucket: "letschat-d666d.appspot.com",
  messagingSenderId: "492210232441",
  appId: "1:492210232441:web:fcdaa5430e5b16d32148a8"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}