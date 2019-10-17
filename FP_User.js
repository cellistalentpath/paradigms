user = {};

user.email = "";
user.password = "";
user.isSignedIn = false;

user.signUp = function(email, password, pass_confirm) {
	if (password === pass_confirm) {
		user.email = email;
		user.password = password;
	} else {
		// Error message stating the passwords do not match
	}
};

user.signIn = function() {
	user.isSignedIn = true;
};

user.signOut = function() {
	user.isSignedIn = false;
};

user.changePassword = function(new_pass, new_pass_confirm) {
	if (new_pass === new_pass_confirm) {
		user.password = new_pass;
	} else {
		// Error message stating the passwords do not match
	}
};

const cj = user;

cj.signUp("test@email.com", "password3", "password3");
console.log(cj.password);
