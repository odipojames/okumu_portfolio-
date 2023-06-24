function sendEmail() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
	Email.send({
	Host: "smtp.gmail.com",
	Username : "onayajames12@gmail.com",
	Password : "qcbnahrepmplaorf",
	To :  "onayajames12@gmail.com",
	From : email,
	Subject : subject,
	Body : message
	}).then(
		message => alert("mail sent successfully")
	);
}