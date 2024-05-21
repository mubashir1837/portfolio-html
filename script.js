document.getElementById("menu-button").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

function sendMail() {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_qua4djz",
      "template_ly95juk",
      document.getElementById("contact-form")
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong.");
      }
    );
}
