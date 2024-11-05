function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, explanation) {
        const feedbackSpan = document.getElementById(feedbackId);
        
        // Para los campos de texto
        if (['q8', 'q9', 'q10'].includes(questionName)) {
            const textAnswer = document.querySelector(`input[name=${questionName}]`).value.trim();
            if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
            }
        } else {
            // Para las preguntas de opción múltiple
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                    feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
                } else {
                    incorrectCount++;
                    feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
                }
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, selecciona una respuesta</span>";
            }
        }
    }

    // Validar preguntas de opción múltiple
    checkAnswer('q1', 'd', 'feedback-q1', 'Los métodos de asignación de espacio son: Ligada, Virtual y Segmentada. <br>Respuesta correcta: d)');
    checkAnswer('q2', 'a', 'feedback-q2', 'La estructura básica del fichero ejecutable es: Cabecera y Secciones. <br>Respuesta correcta: a)');
    checkAnswer('q3', 'c', 'feedback-q3', 'En un sistema monoprogramado, la memoria principal se divide entre el sistema operativo y el programa que se ejecuta en ese instante. <br>Respuesta correcta: c)');
    checkAnswer('q4', 'a', 'feedback-q4', 'La técnica de gestión que introduce fragmentación externa es la Segmentación. <br>Respuesta correcta: a)');
    checkAnswer('q5', 'b', 'feedback-q5', 'Una técnica de manejo de memoria que divide el espacio en secciones físicas de igual tamaño es la Paginación. <br>Respuesta correcta: b)');
    checkAnswer('q6', 'a', 'feedback-q6', 'En segmentación, una dirección lógica consta de un número de segmento y desplazamiento. <br>Respuesta correcta: a)');
    checkAnswer('q7', 'b', 'feedback-q7', 'Se asume que la latencia de acceso de la zona de memoria swap es mucho mayor que la de memoria principal. <br>Respuesta correcta: b)');

    // Validar preguntas de texto
    checkAnswer('q8', 'gestionar la asignación de memoria virtual', 'feedback-q8', 'El propósito de la tabla de páginas es gestionar la asignación de memoria virtual. <br>Respuesta correcta: Gestionar la asignación de memoria virtual');
    checkAnswer('q9', 'asociar direcciones virtuales a físicas', 'feedback-q9', 'La función de las tablas de páginas es asociar direcciones virtuales a físicas. <br>Respuesta correcta: Asociar direcciones virtuales a físicas');
    checkAnswer('q10', 'permite ejecutar programas más grandes que la memoria física', 'feedback-q10', 'La memoria virtual permite ejecutar programas más grandes que la memoria física, almacenando temporalmente datos en el disco. <br>Respuesta correcta: Permite ejecutar programas más grandes que la memoria física');

    // Validar pregunta verdadero/falso
    checkAnswer('q11', 'v', 'feedback-q11', 'La segmentación facilita la compartición de procedimiento entre usuarios. <br>Respuesta correcta: Verdadero');

    // Puedes mostrar el número total de respuestas correctas si lo deseas
    //console.log(`Respuestas correctas: ${correctCount}`);
    //console.log(`Respuestas incorrectas: ${incorrectCount}`);
}
