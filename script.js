document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_o8zn1tz', 'template_uciluog', this) 
      .then(function(response) {
        console.log('Email sent!', response.status, response.text);
        alert('Email sent successfully!');
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong.');
      });
  });
