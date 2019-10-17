let userDict = {};

class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
		this.isSignedIn = false;
	}
	signUp() {
		userDict[email] = password;
	}
	signIn(email, password) {
		if (userDict[email] === password) {
			this.isSignedIn = true;
		}
	}
	signOut() {
		this.isSignedIn = false;
	}
	/**
	 * @param {string} new_pass
	 */
    set changePassword(new_pass, new_pass_confirm) {
        if (new_pass === new_pass_confirm) {
            this.password = new_pass;
            userDict[this.email] = this.password;
        } else {
            // Error message stating the passwords do not match
        }
	}
}
