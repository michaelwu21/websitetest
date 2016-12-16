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

function createaccsetup() {
  var create_is_open = false;
};
function createacc() {
  if(create_is_open === false) {
    create_is_open = true;
    document.getElementById("createacc").style.width= "40%";
    }else{
      create_is_open = false;
      document.getElementById("createacc").style.width= "0%";
      }
};

