const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email'); 
const passwordInput = document.getElementById('password');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let esValido = true;
        if (email === '') {
            alert('El campo de Correo Electrónico es obligatorio.');
            esValido = false;
        }

        if (password === '') {
            alert('El campo de Contraseña es obligatorio.');
            esValido = false;
        }
        if (esValido){
          console.log("Validación de campos exitosa. Redireccionando...");
          window.location.href = '/pages/inicio/inicio.html';
        }
      });
} else {
    console.error("Error: No se encontró el formulario con el ID 'login-form'.");
}