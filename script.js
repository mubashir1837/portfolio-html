document.getElementById("menu-button").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

function sendMail(event) {
  event.preventDefault(); 
  var form = document.getElementById('form');
  
  var templateParams = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: form.message.value,
    reply_to: form.email.value
  };

  emailjs.send("service_qua4djz", "template_ly95juk", templateParams)
    .then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      },
      function(error) {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong.");
      }
    );
}





document.getElementById('menu-button').addEventListener('click', function () {
  var menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});
