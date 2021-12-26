// Initialize Firebase

  const firebaseConfig = {
    apiKey: "AIzaSyDcLut8Iy08rNJWR9VBykw9iJWHKvNy63Q",
    authDomain: "contactform-03273446.firebaseapp.com",
    databaseURL: "https://contactform-03273446-default-rtdb.firebaseio.com",
    projectId: "contactform-03273446",
    storageBucket: "contactform-03273446.appspot.com",
    messagingSenderId: "842023414635",
    appId: "1:842023414635:web:93a317c9a0bb7890173a2e"
  };
     
firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");

  saveMessages(name, email, subject, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
  }


const saveMessages = (name, email, subject, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
};
