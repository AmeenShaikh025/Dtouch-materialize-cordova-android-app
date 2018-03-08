$(".button-collapse").sideNav();

    $(document).ready(function(){
      $('.parallax').parallax();
    });

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
  });



/*code for login*/
		    function validateForm() {
			        var un = document.loginform.usr.value;
			        var pw = document.loginform.pwd.value;
			        var username = "username"; 
			        var password = "password";
			        if ((un == username) && (pw == password)) {
			            return true;
			        }
			        else {
			//alert ("Login was unsuccessful, please check your username and password");
					Materialize.toast('Invalid Username or Password', 1000, 'rounded');
			            return false;
			        }
			  }







