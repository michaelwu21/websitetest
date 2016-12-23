function checkuser() {
var loading = document.getElementById("loading");
loading.style.display="block";
var useremail = document.auth.email.value;
var signinpassword = document.auth.password.value;
	firebase.auth().signInWithEmailAndPassword(useremail, signinpassword).then(function(result) {
	  console.log("Signed in!");
	  console.debug(result);
	}, function(error) {
	  wrongpass.style.display="block";
	})
  }


function resetincorrect () {
	var resetincorrect = document.getElementById("wrongpass");
	resetincorrect.style.display="none"
	resetincorrect.innerHTML = "Sorry, but that password is incorrect, please try again";
}

function createacc() {
  if (open === false) {
    	open = true;

		document.getElementById("createacc").style.display="block";
		var loginid=document.getElementById("login");
		loginid.style.display="none";
		document.getElementById("createiscorrect_login.style").style.display="none";
		document.getElementById("create_incorrectusername").style.display="none";
		document.getElementById("create_incorrectpassword").style.display="none";
		document.getElementById("create_incorrectemail").style.display="none";
		document.getElementById("create_incorrectage").style.display="none";
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
	var createiscorrect_login = document.getElementById("createiscorrect_login");
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

	//check user information
	if (username != "" || null) {
		var usernamecheck = true;
		document.getElementById("create_incorrectusername").style.display="none";
	} else {
		create_incorrectamount+= 1;
		var usernamecheck = false;
		document.getElementById("create_incorrectusername").style.display="block";
	};

	
	if (password.length > 5){
		var passwordcheck = true;
		document.getElementById("create_incorrectpassword").style.display="none";
	} else {
		create_incorrectamount+= 1;
		var passwordcheck = false;
		document.getElementById("create_incorrectpassword").style.display="block";
	};

	if (email.search("@") != -1){
		if (email.indexOf(".") != -1){
			var emailcheck = true;
			document.getElementById("create_incorrectemail").style.display="none";
		} else {
			var emailcheck = false;
			create_incorrectamount+= 1;
			document.getElementById("create_incorrectemail").style.display="block";
		}
	} else {
		var emailcheck = false;
		create_incorrectamount+= 1;
		document.getElementById("create_incorrectemail").style.display="block";
	};

	if (isNaN(age) === false){
		var agecheck = true;
		document.getElementById("create_incorrectage").style.display="none"
	} else {
		var agecheck = false;
		create_incorrectamount+= 1;
		document.getElementById("create_incorrectage").style.display="block";
	};
	
	//firebase create account
	if (usernamecheck && passwordcheck && emailcheck && agecheck) {
		createiscorrect_login.style.display="block";
		firebase.auth().createUserWithEmailAndPassword(email, password);
		create_incorrect.style.display="none";
		document.getElementById("createacc").style.display="none";
		document.getElementById("login").style.display="block";
		setTimeout(function(){ firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			console.log("Signed in!");
  		    console.debug(result);
	}, function(error) {
		console.debug(error);
	}) }, 3000);
	} else {
		create_incorrect.innerHTML="You have " + create_incorrectamount + " incorrect/blank fields";
		create_incorrect.style.display="block";
	}
}

function firebase_signout() {
	firebase.auth().signOut();
}