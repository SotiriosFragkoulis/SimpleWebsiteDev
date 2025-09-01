document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            alert("Please fill out all required fields correctly.");
        } else {
            alert("Thanks for registering to our website.");
        }

        form.classList.add("was-validated");
    });
});
