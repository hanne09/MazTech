// script.js


document.getElementById('login-btn').addEventListener('click', function() {
    alert('Login button clicked');
}); 


document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alert('Search: ' + e.target.value);
    }
});







/*---------------------------------------------------------
// Sign-In Page
var email;
var password;
onEvent("login-bt", "click", function() {
  // Perform sign-in validation here (e.g., check if the email and password match a database record)
  readRecords("SignupDataBase", {}, function(records) {
    for (var i = 0; i < records.length; i++) {
      if (getText("email-input") == (records[i]).Gmail) {
        if (getText("password-input") == (records[i]).Pass) {
          var email = getText("email-input");
          var password = getText("password-input");
          id = (records[i]).id;
          setText("email-input", "");
          setText("password-input", "");
          setScreen("profile-page");
        } else {
          playSound("none", false);
          setText("errorMessage", "Invalid Email or Password");
          setTimeout(function() {
            setText("errorMessage", "");
          }, 3000);
        }
      } else {
        playSound("none", false);
        setText("errorMessage", "Invalid Email or Password");
        setTimeout(function() {
          setText("errorMessage", "");
        }, 3000);
      }
    }
  });
});

// Sign-Up Page
onEvent("SignupButton", "click", function() {
  var Username = getText("NewusernameInput");
  var Email = getText("NewuserEmailInput");
  var Password = getText("NewuserpasswordInput");
  createRecord("SignupDataBase", {Name:Username, Gmail:Email, Pass:Password}, function() {
    
  });
  
  // Perform sign-up logic here (e.g., add the new user to the database)
  // You may want to add more validation and error handling here as well
  // For this example, let's assume the sign-up is successful
  setScreen("ProfilePage");
});

// Profile Page
onEvent("ProfilePage", "screenLoad", function() {
  // Perform any actions or retrieve data specific to the profile page here
  // You can display the user's details or perform any other necessary tasks
});

----------------------------------------------*/
