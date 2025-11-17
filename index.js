document.addEventListener("DOMContentLoaded", function () {
  const btn_inicio = document.getElementById("btn_inicio");
  const btn_crear_reporte = document.getElementById("btn_crear_reporte");
  const btn_seguimiento = document.getElementById("btn_seguimiento");
  const btn_comunidad = document.getElementById("btn_comunidad");
  const btn_cuenta_soporte = document.getElementById("btn_cuenta_soporte");

  btn_inicio.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  btn_crear_reporte.addEventListener("click", function () {
    window.location.href = "pages/crear_reportes/crear_reporte.html";
  });

  btn_seguimiento.addEventListener("click", function () {
    window.location.href = "pages/seguimiento/seguimiento.html";
  });

  btn_comunidad.addEventListener("click", function () {
    window.location.href = "pages/comunidad/comunidad.html";
  });

  btn_cuenta_soporte.addEventListener("click", function () {
    window.location.href = "pages/cuenta_soporte/cuenta_soporte.html";
  });
});
