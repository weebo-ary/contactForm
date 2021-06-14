var firebaseConfig = {
  apiKey: "AIzaSyAAb5Oy4re7QXTYpfFkBRq06VqW-T-EJDM",
  authDomain: "contactform-c87bb.firebaseapp.com",
  projectId: "contactform-c87bb",
  storageBucket: "contactform-c87bb.appspot.com",
  messagingSenderId: "1079719889447",
  appId: "1:1079719889447:web:9b12cd0c583573b1eddc02",
};
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var gender = getInputVal("gender");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var city = getInputVal("city");

  saveMessage(name, gender, email, phone, city);

  document.querySelector(".alert").style.display = "block";

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById('contactForm').reset();
}



function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, gender, email, phone, city) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        gender: gender,
        email: email,
        phone: phone,
        city: city
    });
}
