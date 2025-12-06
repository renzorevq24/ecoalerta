document.addEventListener("DOMContentLoaded", function () {
  const navButtons = [
    { id: "btn_inicio", url: "pages/inicio/inicio.html" },
    { id: "btn_crear_reporte", url: "pages/crear_reportes/crear_reporte.html" },
    { id: "btn_seguimiento", url: "pages/seguimiento/seguimiento.html" },
    { id: "btn_comunidad", url: "pages/comunidad/comunidad.html" },
    {
      id: "btn_cuenta_soporte",
      url: "pages/cuenta_soporte/cuenta_soporte.html",
    },
  ];

  const currentPath = window.location.pathname;
  const normalizedPath = currentPath.toLowerCase();

  function removeAllActiveStates() {
    const allActiveElements = document.querySelectorAll(
      ".left-side .btn-active, .left-side .selected"
    );
    allActiveElements.forEach((element) => {
      element.classList.remove("btn-active");
      element.classList.remove("selected");
    });
  }

  function getPathPrefix(path) {
    const segments = path.split("/").filter((s) => s !== "");
    if (
      segments.length > 2 &&
      segments[segments.length - 1].includes(".html")
    ) {
      return "/";
    }
    return "";
  }

  const pathPrefix = getPathPrefix(currentPath);

  navButtons.forEach((item) => {
    const button = document.getElementById(item.id);
    if (!button) return;
    let shouldBeActive = false;

    if (
      item.id === "btn_inicio" &&
      (normalizedPath.endsWith("/inicio.html") ||
        normalizedPath.endsWith("/ecoalerta/") ||
        normalizedPath.endsWith("/"))
    ) {
      shouldBeActive = true;
    } else if (
      item.id === "btn_comunidad" &&
      (normalizedPath.includes("/comunidad/") ||
        normalizedPath.includes("detalle_campania.html"))
    ) {
      shouldBeActive = true;
    } else if (
      item.id === "btn_cuenta_soporte" &&
      normalizedPath.includes("/cuenta_soporte/")
    ) {
      shouldBeActive = true;
    } else if (normalizedPath.includes(item.url.split("/").pop())) {
      shouldBeActive = true;
    }

    if (shouldBeActive) {
      removeAllActiveStates();
      button.classList.add("btn-active");
    }
  });

  navButtons.forEach((item) => {
    const button = document.getElementById(item.id);

    if (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();

        const urlToNavigate = pathPrefix + item.url;

        if (button.classList.contains("btn-active")) {
          console.log(`Ya estás en ${urlToNavigate}. Navegación bloqueada.`);
          return;
        }

        removeAllActiveStates();
        this.classList.add("btn-active");

        setTimeout(() => {
          window.location.href = urlToNavigate;
        }, 100);
      });
    }
  });

  const hamburger = document.getElementById("hamburger-btn");
  const leftSide = document.querySelector(".left-side");

  hamburger.addEventListener("click", () => {
    leftSide.classList.toggle("active");
  });
});
