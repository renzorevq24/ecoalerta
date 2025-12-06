function ocultarSecciones() {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });
}

function mostrarSeccion(id) {
  const seccion = document.getElementById(id);
  if (!seccion) {
    console.error("No existe la sección:", id);
    return;
  }
  ocultarSecciones();
  seccion.style.display = "block";
}

const botones = document.querySelectorAll(".Cont-secciones ul li a");

botones.forEach(boton => {
  boton.addEventListener("click", function (e) {
    e.preventDefault();

    // Quitar clase activa a todos
    botones.forEach(b => b.classList.remove("seccion-activa"));

    // Marcar activo el actual
    this.classList.add("seccion-activa");

    // Obtener el ID desde el href (#perfil → perfil)
    const destino = this.getAttribute("href").replace("#", "");

    mostrarSeccion(destino);
  });
});

// Mostrar Perfil por defecto
mostrarSeccion("perfil");
// JS para CUENTA y SOPORTE (perfil, editar y subir foto)
document.addEventListener("DOMContentLoaded", () => {

  // --- ELEMENTOS DEL PERFIL ---
  const btnEditar = document.getElementById("btnEditar");
  const btnGuardar = document.getElementById("btnGuardar");
  const btnCancelar = document.getElementById("btnCancelar");
  const perfilVista = document.getElementById("perfil-vista");
  const perfilForm = document.getElementById("perfil-form");
  const avatar = document.querySelector(".avatar");
  const btnCambiarFoto = document.querySelector(".btn-cambiar-foto");

  // --- FUNCIONALIDAD EDITAR ---
  btnEditar.addEventListener("click", () => {
    perfilVista.style.display = "none";
    perfilForm.style.display = "block";
  });

  btnCancelar.addEventListener("click", () => {
    perfilForm.style.display = "none";
    perfilVista.style.display = "block";
  });

  // --- GUARDAR CAMBIOS ---
  btnGuardar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const distrito = document.getElementById("distrito").value;
    const telefono = document.getElementById("telefono").value;
    const sobre = document.getElementById("sobre").value;

    // Actualiza la vista
    perfilVista.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${document.getElementById("correo").value}</p>
      <p><strong>Distrito:</strong> ${distrito}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Sobre mí:</strong> ${sobre}</p>
      <button class="btn-editar" id="btnEditar">Editar</button>
    `;

    perfilForm.style.display = "none";
    perfilVista.style.display = "block";

    // Mensaje de confirmación
    alert("✅ Perfil actualizado exitosamente");

    // Re-asignar evento al nuevo botón Editar generado dinámicamente
    document.getElementById("btnEditar").addEventListener("click", () => {
      perfilVista.style.display = "none";
      perfilForm.style.display = "block";
    });
  });

  // --- CAMBIAR FOTO ---
  btnCambiarFoto.addEventListener("click", () => {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.accept = "image/*";
    inputFile.click();

    inputFile.addEventListener("change", () => {
      const file = inputFile.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          avatar.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
      }
    });
  });

});

// eliminarCuenta
const btnEliminarCuenta = document.getElementById('btnEliminarCuenta');

btnEliminarCuenta.addEventListener('click', () => {
  const primeraConfirm = confirm("⚠ ¿Estás seguro de que quieres eliminar tu cuenta?");
  if (primeraConfirm) {
    const segundaConfirm = confirm("⚠ Esta acción es irreversible. Confirma nuevamente.");
    if (segundaConfirm) {
      alert("Cuenta eliminada correctamente."); 
      // Aquí puedes añadir la lógica real para eliminar la cuenta en tu backend
    } else {
      alert("Acción cancelada.");
    }
  } else {
    alert("Acción cancelada.");
  }
});

// HU-41: Contactar soporte técnico
document.getElementById('form-soporte').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('soporte-respuesta').innerText = "✅ Tu solicitud ha sido enviada";
  e.target.reset();
});

// HU-42: Consultar FAQ
const faqs = [
  {pregunta: "¿Cómo cambio mi contraseña?", respuesta: "Ve a Perfil > Cambiar Contraseña."},
  {pregunta: "¿Cómo reporto basura?", respuesta: "Usa Crear Reportes en el menú principal."},
  {pregunta: "¿Cómo elimino mi cuenta?", respuesta: "Ve a Seguridad y usa Eliminar Cuenta."}
];

document.getElementById('faq-busqueda').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const resultados = faqs.filter(f => f.pregunta.toLowerCase().includes(query));
  const contenedor = document.getElementById('faq-resultados');
  contenedor.innerHTML = "";
  if(resultados.length > 0){
    resultados.forEach(f => {
      contenedor.innerHTML += `<p><strong>${f.pregunta}</strong><br>${f.respuesta}</p>`;
    });
    document.getElementById('faq-mensaje').innerText = "";
  } else {
    document.getElementById('faq-mensaje').innerText = "❌ No se encontraron coincidencias.";
  }
});

// HU-43: Enviar sugerencias
document.getElementById('form-sugerencias').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('sugerencia-respuesta').innerText = "✅ Sugerencia enviada exitosamente";
  e.target.reset();
});
