document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Reemplaza con la URL de tu Web App de Google Apps Script
        const url = "https://script.google.com/macros/s/AKfycbxTjYMvU5Q9aiRdQUxzLh47wFchgkteefEjeE1ki8Dq7NWeFv6mxesi5f81b3w2Ae2vOw/exec";

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
