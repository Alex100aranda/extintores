// Esperar que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    // Agregar el evento de clic al menú hamburguesa
    menuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("active");
    });
  });




//Formulario funciones
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");
    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const mensajeError = document.getElementById("mensajeError");
    const successMessage = document.getElementById("formSuccessMessage");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();  // Evitar que se envíe el formulario de forma tradicional
  
      let isValid = true;
  
      // Validar nombre
      if (nombreInput.value.trim() === "") {
        nombreError.textContent = "El nombre es obligatorio.";
        isValid = false;
      } else {
        nombreError.textContent = "";
      }
  
      // Validar correo electrónico
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
  
      // Validar mensaje
      if (mensajeInput.value.trim() === "") {
        mensajeError.textContent = "El mensaje es obligatorio.";
        isValid = false;
      } else {
        mensajeError.textContent = "";
      }
  
      // Si todo es válido, mostrar mensaje de éxito
      if (isValid) {
        successMessage.style.display = "block";
        setTimeout(function() {
          successMessage.style.display = "none";
          form.reset();  // Resetear el formulario
        }, 5000);  // El mensaje de éxito se oculta después de 5 segundos
      }
    });
  });
  
  