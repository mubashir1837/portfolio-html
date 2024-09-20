document.getElementById("menu-button").addEventListener("click", function () {
  let menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

function sendMail(event) {
  event.preventDefault(); 
  let form = document.getElementById('form');
  
  let templateParams = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: form.message.value,
    reply_to: form.email.value
  };

  emailjs.send("service_o8zn1tz", "template_r30h3b7", templateParams)
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
