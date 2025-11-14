function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before sending your message.");
    return false;
  }

  alert("Message sent successfully! (Demo only)");
  document.getElementById("contactForm").reset();
  return false; // prevent actual form submission for demo
}
$(document).ready(function() {
  // Determine greeting based on time
  const hour = new Date().getHours();
  let greeting = "Good Morning";
  if(hour >= 12 && hour < 17) greeting = "Good Afternoon";
  else if(hour >= 17 && hour < 21) greeting = "Good Evening";
  else if(hour >= 21 || hour < 5) greeting = "Good Night";

  // Typed.js for greeting
  new Typed(".typed-greeting", {
    strings: [greeting],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false
  });

  // Typed.js for name
  new Typed(".typed-name", {
    strings: ["Ganti Vinay Kumar"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

  // Hamburger Menu
  $(".hamburger").click(function() {
    $(".nav-links").toggleClass("open");
  });
});

