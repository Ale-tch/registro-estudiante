const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        apellidoP: document.getElementById("apellidoP").value,
        apellidoM: document.getElementById("apellidoM").value,
        matricula: document.getElementById("matricula").value,
        carrera: document.getElementById("carrera").value,
        semestre: document.getElementById("semestre").value,
        grupo: document.getElementById("grupo").value,
        correo: document.getElementById("correo").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        motivo: document.getElementById("motivo").value,
        observaciones: document.getElementById("observaciones").value
    };

    try {

        const respuesta = await fetch('/api/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (respuesta.ok) {

            document.getElementById("resultado").innerHTML = `
                <div class="registro-exitoso">
                    <h2>✅ Registro guardado</h2>
                    <p>El estudiante fue registrado correctamente.</p>
                </div>
            `;

            formulario.reset();

        } else {

            document.getElementById("resultado").innerHTML = `
                <div class="registro-exitoso">
                    <h2>❌ Error</h2>
                    <p>${resultado.error}</p>
                </div>
            `;

        }

        } catch(error) {

        console.error(error);

        document.getElementById("resultado").innerHTML = `
            <div class="registro-exitoso">
                <h2>❌ Error de conexión</h2>
                <p>No se pudo conectar con el servidor.</p>
            </div>
        `;

    }

});
