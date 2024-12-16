document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Reemplaza con la URL de tu Web App de Google Apps Script
        const url = "https://script.google.com/macros/s/your-script-id/exec";

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                document.getElementById("response-message").textContent =
                    "¡Inscripción exitosa!";
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
                document.getElementById("response-message").textContent =
                    "Hubo un error, por favor inténtalo de nuevo.";
            });
    });
