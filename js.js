function checkuser() {
var wrongpass = document.getElementById("wrongpass");
var useremail = document.auth.email.value.replace(/\s/g,'');
  if(useremail.toLowerCase() === "michaelwu21"){
    if(document.auth.password.value==="304014"){
	wrongpass.style.display="block";
	wrongpass.innerHTML = "Loading... Please Wait";
      window.location= "https://michaelwu21.github.io/websitetest/home/index.html";
    }else{
      wrongpass.style.display="block";
    }
  }else{
    wrongpass.style.display="block";
  }
  }

function resetincorrect () {
var resetincorrect = document.getElementById("wrongpass");
resetincorrect.style.display="none"
resetincorrect.innerHTML = "Sorry, but that password is incorrect, please try again";
}

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
	document.getElementById("create_firstpage").style.display="block";
	document.getElementById("create_secondpage").style.display="none";
	var loginid=document.getElementById("login");
		loginid.style.display="block";
};

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
	var username = document.create_account.create_user.value.toLowerCase();
	var password = document.create_account.create_password.value;
	var email = document.create_account.create_email.value;
	var gender = document.create_account.create_gender.value;
	var age = document.create_account.create_age.value;
	create_checkinfo(username, password, email, gender, age);
	};
//switch create account pages
function create_nextpage() {
	document.getElementById("create_firstpage").style.display="none";
	document.getElementById("create_secondpage").style.display="block";
};
//back to first page
function create_back() {
	document.getElementById("create_secondpage").style.display="none";
	document.getElementById("create_firstpage").style.display="block";
};

//check info for creating account
function create_checkinfo(username, password, email, gender, age){
	 //name of account object
	var create_incorrectamount = 0;
	var create_incorrect=document.getElementById("create_incorrect");
	if(username != "" || null){
		var usernamecheck = true;
		document.getElementById("create_incorrectusername").style.display="none";
	}else{
		create_incorrectamount+= 1;
		var usernamecheck = false;
		document.getElementById("create_incorrectusername").style.display="block";
		};
	if(password.length > 5){
		var passwordcheck = true;
		document.getElementById("create_incorrectpassword").style.display="none";
	}else{
		create_incorrectamount+= 1;
		var passwordcheck = false;
		document.getElementById("create_incorrectpassword").style.display="block";
		};
	if(email.search("@") != -1){
		if(email.indexOf(".") != -1){
		var emailcheck = true;
		document.getElementById("create_incorrectemail").style.display="none";
	}else{
		var emailcheck = false;
		create_incorrectamount+= 1;
		document.getElementById("create_incorrectemail").style.display="block";
	}
		}else{
			var emailcheck = false;
			create_incorrectamount+= 1;
			document.getElementById("create_incorrectemail").style.display="block";
		};
	if(isNaN(age) === false){
		var agecheck = true;
		document.getElementById("create_incorrectage").style.display="none"
	}else{
		var agecheck = false;
		create_incorrectamount+= 1;
		document.getElementById("create_incorrectage").style.display="block";
	};
	if(usernamecheck && passwordcheck && emailcheck && agecheck === true) {
		username = new account(username, password, email, gender, age);
				create_incorrect.style.display="none";
	}else{
		create_incorrect.innerHTML="You have " + create_incorrectamount + " incorrect/blank fields";
		create_incorrect.style.display="block";
	}
}


