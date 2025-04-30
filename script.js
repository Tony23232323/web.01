document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("orderForm");
    const message = document.getElementById("formMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      message.style.display = "block";
      form.reset();
  

      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    });
  

    const textElement = document.querySelector(".typewriter-text");
    const phrase = "This isn't just a picture — this is nostalgia.";
    let index = 0;
    let isDeleting = false;
  
    function type() {
      if (!textElement) return;
  
      const speed = isDeleting ? 60 : 100;
      textElement.textContent = phrase.substring(0, index);
  
      if (!isDeleting && index < phrase.length) {
        index++;
      } else if (isDeleting && index > 0) {
        index--;
      } else if (!isDeleting && index === phrase.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
      }
  
      setTimeout(type, speed);
    }
  
    type();
  });
  
