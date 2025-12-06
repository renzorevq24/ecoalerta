document.addEventListener("DOMContentLoaded", () => {
  const btnCrearReporte = document.getElementById("btn_crear_reporte");
  const crearReporteSection = document.getElementById("crearReporte");
  const pasos = document.querySelectorAll(".paso");
  const indicadores = document.querySelectorAll(".paso-indicador");
  let pasoActual = 0;

  function mostrarPaso(index) {
    pasos.forEach((p, i) => {
      p.style.display = i === index ? "block" : "none";
    });
    indicadores.forEach((ind, i) => {
      if (i <= index) {
        ind.classList.add("activo");
      } else {
        ind.classList.remove("activo");
      }
    });
  }


  if (btnCrearReporte) {
    btnCrearReporte.addEventListener("click", () => {
      if (crearReporteSection) {
        crearReporteSection.classList.remove("hidden");
        crearReporteSection.style.display = "block";
      }
      pasoActual = 0;
      mostrarPaso(pasoActual);
    });
  }



  document.querySelectorAll(".btn-continuar").forEach(btn => {
    btn.addEventListener("click", () => {
      if (pasoActual < pasos.length - 1) {
        pasoActual++;
        mostrarPaso(pasoActual);
      }
    });
  });

  document.querySelectorAll(".btn-volver").forEach(btn => {
    btn.addEventListener("click", () => {
      if (pasoActual > 0) {
        pasoActual--;
        mostrarPaso(pasoActual);
      }
    });
  });


  const btnEnviar = document.querySelector(".btn-enviar");
  const modalDuplicado = document.getElementById("modalDuplicado");
  const btnEnviarDeTodosModos = document.getElementById("btnEnviarDeTodosModos");
  const cerrarDuplicado = document.getElementById("cerrarDuplicado");

  if (btnEnviar) {
    btnEnviar.addEventListener("click", (e) => {
      e.preventDefault(); 
      if (modalDuplicado) modalDuplicado.classList.remove("hidden");
    });
  }


  if (btnEnviarDeTodosModos) {
    btnEnviarDeTodosModos.addEventListener("click", () => {
      if (modalDuplicado) modalDuplicado.classList.add("hidden");
      mostrarPantallaExito();  
    });
  }

  // Cerrar modal con la X
  if (cerrarDuplicado) {
    cerrarDuplicado.addEventListener("click", () => {
      if (modalDuplicado) modalDuplicado.classList.add("hidden");
    });
  }

/*pantalla de exito*/
  function mostrarPantallaExito() {
    if (crearReporteSection) crearReporteSection.style.display = "none";

    const success = document.getElementById("successScreen");
    if (success) success.classList.remove("hidden");

    // Generar ID aleatorio
    const randomID = "#R-" + String(Math.floor(Math.random() * 900000) + 100000);
    const reportNumberEl = document.getElementById("reportNumber");
    if (reportNumberEl) reportNumberEl.textContent = randomID;

    // Fecha actual formateada
    const now = new Date();
    const options = { day: "numeric", month: "short" };
    const hourOpt = { hour: "2-digit", minute: "2-digit" };

    const fechaFormateada =
      now.toLocaleDateString("es-PE", options) +
      ", " +
      now.toLocaleTimeString("es-PE", hourOpt);

    const reportDateEl = document.getElementById("reportDate");
    if (reportDateEl) reportDateEl.textContent = fechaFormateada;

    // Ubicación del reporte
    const ubicEl = document.querySelector(".ubicacion-direccion");
    const reportLocationEl = document.getElementById("reportLocation");
    const ubicTexto = ubicEl ? ubicEl.textContent.trim() : "Ubicación no disponible";
    if (reportLocationEl) reportLocationEl.textContent = ubicTexto;
  }

/*botones de exito*/
  window.goToReports = function () {
    window.location.href = "mis-reportes.html";
  };

  window.newReport = function () {
    window.location.reload();
  };
});
