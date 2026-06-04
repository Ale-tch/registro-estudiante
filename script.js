const formulario = document.getElementById("registroForm");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidoP = document.getElementById("apellidoP").value;
    const apellidoM = document.getElementById("apellidoM").value;
    const matricula = document.getElementById("matricula").value;
    const carrera = document.getElementById("carrera").value;
    const semestre = document.getElementById("semestre").value;
    const grupo = document.getElementById("grupo").value;
    const correo = document.getElementById("correo").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const motivo = document.getElementById("motivo").value;
    const observaciones = document.getElementById("observaciones").value;

    resultado.innerHTML = `
        <div class="registro-exitoso">
            <h2>✅ Registro realizado correctamente</h2>

            <p><strong>Nombre:</strong> ${nombre} ${apellidoP} ${apellidoM}</p>
            <p><strong>Matrícula:</strong> ${matricula}</p>
            <p><strong>Carrera:</strong> ${carrera}</p>
            <p><strong>Semestre:</strong> ${semestre}</p>
            <p><strong>Grupo:</strong> ${grupo}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Hora:</strong> ${hora}</p>
            <p><strong>Motivo:</strong> ${motivo}</p>
            <p><strong>Observaciones:</strong> ${observaciones}</p>
        </div>
    `;

    formulario.reset();

});