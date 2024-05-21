document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  function senndMail (){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject :document.getElementById("message").value,
    }
  
    emailjs.send("service_qua4djz","template_ly95juk",parms).then(alert("Email Sent!!"))
  }