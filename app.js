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
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		document.getElementById("entire_login").style.display="none";
		document.getElementById("entire_home").style.display="block";
		console.log("Logged In!");
		console.debug(user);
		document.getElementById("loading").style.display="none";
	} else {
		document.getElementById("entire_home").style.display="none";
		document.getElementById("entire_login").style.display="block";
		document.getElementById("loading").style.display="none";
	}
});
}());