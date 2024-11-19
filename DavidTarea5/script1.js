document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
    const botonLimpiar = document.getElementById("resetea");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío real del formulario

        // Obtener valores del formulario
        const nombre = document.getElementById("name").value;
        const pais = document.getElementById("pais").value;
        const genero = formulario.genero.value;
        const intereses = Array.from(formulario.intereses)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        // Construir y mostrar el resultado
        resultado.innerHTML = `
            <h2>Resultados:</h2>
            <p><strong>Nombre completo:</strong> ${nombre}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Sexo:</strong> ${genero}</p>
            <p><strong>Intereses:</strong> ${intereses.length > 0 ? intereses.join(", ") : "Ninguno"}</p>
        `;
        
        // Limpiar el formulario
        formulario.reset();
    });

    botonLimpiar.addEventListener("click", function() {
        formulario.reset(); // Limpiar los campos del formulario
        resultado.innerHTML = ""; // Limpiar el resultado mostrado
    });
});


