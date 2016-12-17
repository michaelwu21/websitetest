function checkuser() {
var useremail = document.auth.email.value.replace(/\s/g,'');
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
      }else{
		var open=true;
		document.getElementById("createacc").style.display="block";
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

//acc custom object creator
function account (username, password, email, gender, age) {
	this.username = username;
	this.password = password;
	this.email = email;
	this.gender = gender;
	this.age = age;
};
//create the acc using custom acc object creator
function createnewacc() {
	var username = document.createacc.acc_user.value.toLowerCase();
	var password = document.createacc.acc_password.value;
	var email = document.createacc.acc.email.value;
	var gender = document.createacc.select.options.selected.value;
	var age = document.createacc.age.value;
	account(username, password, email, gender, age);
	}
