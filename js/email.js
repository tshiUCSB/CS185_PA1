
function init_email_form() {
	EMAIL_INPUT = document.getElementById("email-input");
	SUBMIT_BUTTON = document.getElementById("email-submit-button");
	SUCCESS_MESSAGE = document.getElementById("success-message");

	function validate_email(email) {
		let suffix = email.slice(-4);
		let at = email.indexOf('@');
		return at >= 0 
			&& (suffix == ".com" || suffix == ".edu");
	}

	function email_submit_handler(e) {
		let is_valid = validate_email(EMAIL_INPUT.value);
		if (is_valid) {
			SUCCESS_MESSAGE.innerHTML = "Email successfully recorded";
		}
		else {
			SUCCESS_MESSAGE.innerHTML = "Invalid email address";
		}
	}

	SUBMIT_BUTTON.addEventListener('click', email_submit_handler);
}

window.addEventListener('load', function() {
	init_scroll_top(25);
	init_email_form();
});