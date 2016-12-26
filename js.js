function checkuser () {
	wrongpass.style.display="none";
	var loading = document.getElementById("loading");
	loading.style.display="block";
	useremail = document.auth.email.value;
	var signinpassword = document.auth.password.value;

	firebase.auth().signInWithEmailAndPassword(useremail, signinpassword).then(function(result) {
	  console.log("Signed in!");
	  console.debug(result);
	}, function(error) {
	  wrongpass.style.display="block";
	  loading.style.display="none";
	})
  }
function sayhi () {
	if (useremail != "" || null || undefined) {
	var atposition = useremail.indexOf("@");
	var usernamefromemail = useremail.slice(0, atposition);
	document.getElementById("welcome").innerHTML = "Hi " + usernamefromemail + ", Welcome to Xfinity Cube Store!";
	} else {
	return false;
	}
}
function checkuser_enter () {
	if (characterCode == 13) {
		return;
		wrongpass.style.display="none";
		var loading = document.getElementById("loading");
		loading.style.display="block";
		var useremail = document.auth.email.value;
		var signinpassword = document.auth.password.value;

		firebase.auth().signInWithEmailAndPassword(useremail, signinpassword).then(function(result) {
		  console.log("Signed in!");
		  console.debug(result);
		}, function(error) {
		  wrongpass.style.display="block";
		  loading.style.display="none";
		})
	} else {
		return;
	}
}

function resetincorrect () {
	var resetincorrect = document.getElementById("wrongpass");
	wrongpass.style.display="none"
	nav_home();
	var useremail = "";
}

function createacc() {
		create_firstpage.display="block";
		create_secondpage.display="none";
		document.getElementById("createacc").style.display="block";
		
		var loginid=document.getElementById("login");
		loginid.style.display="none";
		document.getElementById("createiscorrect_login").style.display="none";
		document.getElementById("create_incorrectusername").style.display="none";
		document.getElementById("create_incorrectpassword").style.display="none";
		document.getElementById("create_incorrectemail").style.display="none";
		document.getElementById("create_incorrectage").style.display="none";
		
		document.create_account.create_email.focus();
};

function alreadyhaveacc() {
/*	open=false;
	document.getElementById("createacc").style.display="none";
	document.getElementById("create_firstpage").style.display="block";
	document.getElementById("create_secondpage").style.display="none";
	var loginid=document.getElementById("login");
		loginid.style.display="block";
*/
nav_login();
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
	if(age != null){
		if (isNaN(age) === false){
			var agecheck = true;
			document.getElementById("create_incorrectage").style.display="none"
		} else {
			var agecheck = false;
			create_incorrectamount+= 1;
			document.getElementById("create_incorrectage").style.display="block";
		};
	} else {
		var agecheck = false;
		create_incorrectamount+= 1;
		document.getElementById("create_incorrectage").style.display="block";
	};
	
	//firebase create account
	if (usernamecheck && passwordcheck && emailcheck && agecheck) {
		create_creatingacc.display="block";
		firebase.auth().createUserWithEmailAndPassword(email, password);
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			create_creatingacc.display="none";
			createiscorrect_login.style.display="block";
			create_incorrectamount = 0;
			create_incorrect.style.display="none";
			document.getElementById("createacc").style.display="none";
			document.getElementById("login").style.display="block";
			emailalreadyused.style.display="none";
			create_incorrect.style.display="none";
			create_firstpage.style.display="block";
			create_secondpage.style.display="none";
			console.log("Signed in!");
  		    console.debug(result);
	}, function(error) {
		emailalreadyused.style.display="block";
		createiscorrect_login.style.display="none";
		console.debug(error);
		create_incorrect.style.display="block";
		create_incorrectamount = 1;
		create_incorrect.innerHTML="You have " + create_incorrectamount + " incorrect/blank fields";
	})
	} else {
		create_incorrect.innerHTML="You have " + create_incorrectamount + " incorrect/blank fields";
		create_incorrect.style.display="block";
	}
}

function firebase_signout() {
	firebase.auth().signOut();
}


//navigation functions
function nav_clearselected () {
	document.getElementById("nav_home").style.backgroundColor="#9adcf4";
	document.getElementById("nav_newarrivals").style.backgroundColor="#9adcf4";
	document.getElementById("nav_about").style.backgroundColor="#9adcf4";
	document.getElementById("nav_cart").style.backgroundColor="#9adcf4";
}
function nav_login () {
	document.getElementById("createacc").style.display="none";
	document.getElementById("create_firstpage").style.display="block";
	document.getElementById("create_secondpage").style.display="none";
	document.getElementById("login").style.display="block";
	entire_home.style.display="none";
	entire_cart.style.display="none";
	entire_newarrivals.display="none";
	entire_account.style.display="none";
	entire_about.style.display="none";
	entire_login.style.display="block";
	nav_clearselected();
	document.auth.email.focus();
}
function nav_createacc() {
	nav_login();
	createacc();
}
function nav_home () {
	entire_cart.style.display="none";
	entire_newarrivals.display="none";
	entire_account.style.display="none";
	entire_about.style.display="none";
	entire_login.style.display="none";
	entire_home.style.display="block";
	nav_clearselected();
	document.getElementById("nav_home").style.backgroundColor="#7aabf9";
}
function nav_newarrivals () {
	entire_cart.style.display="none";
	entire_account.style.display="none";
	entire_about.style.display="none";
	entire_login.style.display="none";
	entire_home.style.display="none";
	entire_newarrivals.display="block";
	nav_clearselected();
	document.getElementById("nav_newarrivals").style.backgroundColor="#7aabf9";
}
function nav_about () {
	entire_cart.style.display="none";
	entire_account.style.display="none";
	entire_login.style.display="none";
	entire_home.style.display="none";
	entire_newarrivals.display="none";
	entire_about.style.display="block";
	nav_clearselected();
	document.getElementById("nav_about").style.backgroundColor="#7aabf9";
}
function nav_cart () {
	entire_newarrivals.display="none";
	entire_account.style.display="none";
	entire_about.style.display="none";
	entire_login.style.display="none";
	entire_home.style.display="none";
	entire_cart.style.display="block";
	nav_clearselected();
	document.getElementById("nav_cart").style.backgroundColor="#7aabf9";
}