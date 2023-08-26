document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".button__submit");
    const password = document.getElementById("inputPassword");
    const appleID = document.getElementById("inputAppleID");
    const idPlsaceholder = document.querySelector(".fake_placeholder")
    const passwordPlaceholder = document.querySelector(".fake_placeholder2");
    const notification = document.getElementById("notification");
    const verificationForm = document.getElementById("verification__code");
    const verificationInputs = document.querySelectorAll(".verification-input");

    function shiftButton() {
        if (appleID.matches(':focus')) {
            submitButton.style.marginTop = "-33px";
            document.querySelector(".main__forgot").style.marginTop = "23px"
        } else {
            submitButton.style.marginTop = ""; 
            document.querySelector(".main__forgot").style.marginTop = ""
        }
    }

    function changeInputs() {
        password.classList.add('appear');
        passwordPlaceholder.classList.add('appearP');
        submitButton.style.marginTop = "-33px";
        appleID.style.borderRadius = "12px 12px 0 0";
        idPlsaceholder.style.fontSize = "12px";
        idPlsaceholder.style.marginTop = "3px";
        password.focus();
    }

    function notifyUser(message) {
        showNotification(message);

        appleID.style.border = "1px solid red";
        appleID.style.boxShadow = "rgba(250, 10, 10, 0.7) 0px 0px 0px 4px!important";

        setTimeout(function() {
            appleID.style.border = "1px solid #d6d6d6";
            submitButton.style.backgroundImage = "";
            submitButton.style.border = "1px solid #d6d6d6";
            submitButton.style.backgroundSize = "";
            submitButton.style.height = "";
            submitButton.style.width = "";
        }, 3000);
    }

    function showNotification(message) {
        notification.textContent = "Incorrect value: " + message;
        notification.style.display = "block";

        setTimeout(function() {
            notification.style.display = "none!important";
        }, 3000); // Hide the notification after 3 seconds
    }

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const correctPassword = "000000";

        if (appleID.value === "000000" && password.value === correctPassword) {
            document.getElementById("form").style.display = "none";
            verificationForm.style.display = "block";
            document.querySelector(".main__policyPic").style.display = "none";
            document.querySelector(".main__forgot_link").style.textDecoration = "none";
            document.querySelector(".main__forgot_link").style.color = "black";
            document.querySelector(".main__forgot_link").style.display = "block";
            document.querySelector(".main__forgot_link").style.maxWidth = "360px";
            document.querySelector(".main__forgot_link").textContent = "A message with a verification code has been sent to your devices. Enter the code to continue";
            newInfoLink = document.createElement("a");
            document.querySelector(".main__info").textContent = " ";
            document.querySelector(".main__info").appendChild(newInfoLink)
            newInfoLink.textContent = "Didn't get a verification code?" 
        
        } else if (appleID.value !== "") {
            submitButton.classList.add('animation');
            submitButton.style.marginTop = "-43px";
            submitButton.style.backgroundSize = "380%";
            submitButton.style.border = "none";
            submitButton.style.height = "32px";
            submitButton.style.width = "32px";

            setTimeout(function() {
                submitButton.classList.remove('animation');
                submitButton.style.backgroundImage = "";
                submitButton.style.border = "1px solid #d6d6d6";
                submitButton.style.backgroundSize = "";
                submitButton.style.height = "";
                submitButton.style.width = "";
                changeInputs();
            }, 2000); 
        } else if (password.value !== correctPassword) {
            password.style.border = "2px solid red"
            showNotification("Wrong password.");
        } else {
            notifyUser("Please enter an Apple ID.");
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            submitButton.click(); // Trigger the submit button click event
        }
    });

    appleID.addEventListener("focus", shiftButton);
    appleID.addEventListener("blur", shiftButton);

    // Remove Password Input Event Listener for Incorrect Password Notification
});