function checkuser() {
var useremail = document.auth.email.value;
  if(useremail.toLowerCase() === "michaelwu21"){
    if(document.auth.password.value==="304014"){
      window.location= "https://michaelwu21.github.io/websitetest/home/index.html"
    }else{
      document.getElementById("wrongpass").innerHTML= "Sorry, but that password is incorrect, please try again";
    }
  }else{
    document.getElementById("wrongpass").innerHTML= "Sorry, but that password/email is incorrect, please try again";
  }
  };

function createacc() {
  if(open === false || null) {
    		var open = true;
		document.getElementById("user_acc").innerHTML = "Account Username:";
		dcoument.getElementById("user_password").innerHTML = "Account Password:";
		document.getElementById("createacc").style.width= "40%";
    }else{
      open = false;
      document.getElementById("createacc").style.width= "0%";
			document.getElementById("user_acc").innerHTML = "";
			document.getElementById("user_password").innerHTML = "";
      }
};

