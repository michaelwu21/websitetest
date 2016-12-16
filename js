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
		document.getElementById("createacc").style.display="block";
		var loginid=document.getElementById("login");
		loginid.style.display="none";

    }else if(open != null){
      open = false;
      document.getElementById("createacc").style.display="none";
      }else{
		var open=true;
		document.getElementById("createacc").style.visibility="visible";
		var loginid=document.getElementById("login");
		loginid.style.display="none";
}
};

function alreadyhaveacc() {
	open=false;
	document.getElementById("createacc").style.display="none";
	var loginid=document.getElementById("login");
		loginid.style.display="block";
}
	
