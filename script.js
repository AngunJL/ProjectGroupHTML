function Login() {
   var user = document.getElementById("username").value;
   var pass = document.getElementById("password").value;
   if(user == "test" && pass == "password") {
       alert("Logged In");
       return false;
   } else {
       alert("wrong user/pass");
       return false;
       }
   }


function Signup(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var repass = document.getElementById("repassword").value;
   if(pass == repass){
      alert("Signup success");
   }
   else {
      alert("Passwords do not match");
   }
 }

