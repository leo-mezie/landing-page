function formvalidate() {
  let name = document.forms.RegForm.fullName;
  let email = document.forms.RegForm.Email;

  let regName = /\d+$/g; // Javascript reGex for Name validation

  if (name.value === "" || regName.test(name)) {
    alert("Please enter your name properl.");
    name.focus();
    return false;
  }

  if (email.value === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  } else {
    alert("submitted,Thank you for subscribing to our news letter");

    return true;
  }
}

// email validation with regular expression

function emailvalidate() {
  var emailtxt = document.getElementById("Email");

  var mainemail = emailtxt.value;
  var regexpres =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //testing the regular expression for the email in email txtbox (regexpres.test(mainemail))
  if (regexpres.test(mainemail)) {
    // errormsg.style.display="none";
    emailtxt.style.borderColor = "green";
    emailtxt.style.boxShadow = "3px 2px 4px green";
  } else {
    emailtxt.style.borderColor = "red";
    emailtxt.style.boxShadow = "3px 2px 4px red";
    emailtxt.focus();
  }

  return false;
}
