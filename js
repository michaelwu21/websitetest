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
  if(open === false) {
    		open = true;
		document.getElementById("createacc").style.visibility="visible";
    }else if(open != null){
      open = false;
      document.getElementById("createacc").style.visibility="hidden";
      }else{
      var open=true;
      document.getElementById("createacc").style.visibility="visible";
}
};
