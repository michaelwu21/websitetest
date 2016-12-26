(function() {
	// Initialize Firebase
	  var config = {
		apiKey: "AIzaSyAVGPjwclhjP64PS-Pq9tHyz0JDNPauBfQ",
		authDomain: "websitetest-4ec54.firebaseapp.com",
		databaseURL: "https://websitetest-4ec54.firebaseio.com",
		storageBucket: "websitetest-4ec54.appspot.com",
		messagingSenderId: "390249574104"
	  };
	  firebase.initializeApp(config);
	  var rootRef = firebase.database().ref();
//firebase user auth changed
var loggedin = false;
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		var useremail = document.auth.email.value;
		sayhi();
		loggedin = true;
		nav_home();
		console.log("Logged In!");
		console.debug(user);
		loading.style.display="none";
		document.getElementById("nav_login").style.display="none";
		document.getElementById("nav_createacc").style.display="none";
		document.getElementById("nav_account").style.display="block";
	} else {
		loggedin = false;
		nav_home();
		document.getElementById("nav_account").style.display="none";
		document.getElementById("nav_login").style.display="block";
		document.getElementById("nav_createacc").style.display="block";
	}
});
}());