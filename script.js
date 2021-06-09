function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "fatemeh" && password === "1377") {
    alert("login succesfully");
    return false;
  } else {
    alert("login failed");
  }
};