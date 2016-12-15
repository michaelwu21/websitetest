function checkuser() {
  if(document.auth.email.value==="Michaelwu21"){
  if(document.auth.email.value==="304014"){
  window.location= "michaelwu21.github.io/websitetest/home/index.html"
  }else{
  document.getElementById("wrongpass")= "Sorry, but that password is incorrect, please try again";
  }
  }else{
  document.getElementById("wrongpass")= "Sorry, but that password/email is incorrect, please try again";
  }
  };
  
