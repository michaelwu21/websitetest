function checkuser() {
var useremail = document.auth.email.value.replace(/\s/g,'');
  if(useremail.toLowerCase() === "michaelwu21"){
    if(document.auth.password.value==="304014"){
      window.location= "https://michaelwu21.github.io/websitetest/home/index.html";
    }else{
      document.getElementById("wrongpass").innerHTML= "Sorry, but that password is incorrect, please try again";
    }
  }else{
    document.getElementById("wrongpass").innerHTML= "Sorry, but that password/email is incorrect, please try again";
  }
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
	var gender = document.create_account.select.options.selected.value;
	var age = document.create_account.age.value;
	account(username, password, email, gender, age);
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
	if(username != "" || null){
	if(password.length > 5){
	if(email.search("@") != -1){
	if(email.search(".") != -1){
	if(isNaN(age) === false){
	account(username, password, email, gender, age);
	}else{
	document.getElementById("create_incorrectusername").style.display="block";
	}
	}else{
	document.getElementById("create_incorrectpassword").style.display="block";
	}
	}else{
	document.getElementById("create_incorrectemail").style.display="block";
	}
	}else{
	document.getElementById("create_incorrectemail").style.display="block";
	}
	}else{
	document.getElementById("create_incorrectage").style.display="block";
	}
	};

