function validarRespuestas() {
    // Definir las respuestas correctas
    const respuestasCorrectas = {
        q1: 'v',
        q2: 'v',
        q3: 'f',
        q4: 'v',
        q5: 'f',
        q6: 'v',
    };

    // Definir los mensajes de retroalimentación
    const mensajesDeRetroalimentacion = {
        q1: 'La capa del sistema de archivos permite gestionar operaciones fundamentales sobre archivos y directorios. <br>Respuesta correcta: Verdadero',
        q2: 'En UNIX y Linux, las llamadas al sistema como open(), read(), write() y close() permiten manipular archivos. <br>Respuesta correcta: Verdadero',
        q3: 'La gestión de nombres y directorios en realidad permite organizar archivos en una estructura jerárquica, con carpetas y subcarpetas. <br>Respuesta correcta: Falso',
        q4: 'Ext4 en Linux utiliza bloques de tamaño fijo y asigna espacio contiguo cuando es posible, mejorando la eficiencia. <br>Respuesta correcta: Verdadero',
        q5: 'Los metadatos se almacenan en estructuras separadas, como los inodos en sistemas Linux. <br>Respuesta correcta: Falso',
        q6: 'En sistemas UNIX, los permisos se dividen en propietario, grupo y otros, con permisos de lectura, escritura y ejecución. <br>Respuesta correcta: Verdadero',
    };

    // Iterar sobre cada pregunta
    for (let i = 1; i <= 6; i++) {
        const preguntaName = 'q' + i;
        const checkboxes = document.getElementsByName(preguntaName);
        const preguntaRow = document.getElementById('pregunta' + i);

        // Limpiar colores previos y mensajes
        preguntaRow.style.backgroundColor = '';
        const mensajeAnterior = preguntaRow.querySelector('.mensaje-repaso');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        // Verificar cuántos checkboxes están marcados
        const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkboxesMarcados.length === 1) {
            // Obtener el valor del checkbox marcado
            const valorCheckbox = checkboxesMarcados[0].value;

            // Verificar si la respuesta es correcta
            if (valorCheckbox === respuestasCorrectas[preguntaName]) {
                // Respuesta correcta, pintar de verde (60% opaco) y mostrar mensaje
                preguntaRow.style.backgroundColor = 'rgba(144, 238, 144, 0.3)'; // lightgreen
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'green';
                mensaje.innerText = 'Respuesta correcta';
                preguntaRow.appendChild(mensaje);
            } else {
                // Respuesta incorrecta, pintar de rojo (60% opaco) y mostrar mensaje de repaso personalizado
                preguntaRow.style.backgroundColor = 'rgba(255, 99, 71, 0.3)'; // lightcoral
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'red';
                mensaje.innerHTML = mensajesDeRetroalimentacion[preguntaName]; // Usar innerHTML para mostrar HTML correctamente
                preguntaRow.appendChild(mensaje);
            }
        } else if (checkboxesMarcados.length === 0) {
            // Si no se selecciona ninguna opción, pintar de azul (60% opaco)
            preguntaRow.style.backgroundColor = 'rgba(173, 216, 230, 0.3)'; // lightblue
        } else if (checkboxesMarcados.length > 1) {
            // Mostrar mensaje de error si más de un checkbox está marcado en una fila
            alert('Error: Solo puedes seleccionar una opción por pregunta.');
            return; // Detener la validación si hay un error
        }
    }
}
