function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, explanation) {
        const feedbackSpan = document.getElementById(feedbackId);
        
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

    // Validar preguntas de opción múltiple
    checkAnswer('q1', 'b', 'feedback-q1', 'Un sistema de archivos estructurado organiza los datos en una jerarquía.');
    checkAnswer('q2', 'b', 'feedback-q2', 'La principal ventaja es la mejora en la velocidad de acceso y organización de los datos.');
    checkAnswer('q3', 'b', 'feedback-q3', 'Las bitácoras registran cambios y operaciones realizadas sobre los archivos.');
    checkAnswer('q4', 'b', 'feedback-q4', 'Un diario es un registro secuencial de cambios en un sistema de archivos.');
    checkAnswer('q5', 'b', 'feedback-q5', 'Se registran actividades de los usuarios, acceso a archivos y cambios realizados.');
    checkAnswer('q6', 'b', 'feedback-q6', 'Una desventaja es que pueden requerir un mayor tiempo de configuración y mantenimiento.');
    checkAnswer('q7', 'b', 'feedback-q7', 'La fragmentación se refiere a la división de un archivo en partes no contiguas.');
    checkAnswer('q8', 'd', 'feedback-q8', 'Un diario registra cambios cronológicamente, mientras que una bitácora registra eventos.');
    checkAnswer('q9', 'b', 'feedback-q9', 'Los sistemas de archivos que utilizan journaling registran cambios antes de aplicarlos.');
    checkAnswer('q10', 'b', 'feedback-q10', 'Es importante para asegurar la integridad y disponibilidad de los datos.');
    checkAnswer('q11', 'b', 'feedback-q11', 'Un software de análisis de logs puede ser utilizado para analizar registros de bitácoras.');

    // Puedes mostrar el número total de respuestas correctas si lo deseas
    //console.log(`Respuestas correctas: ${correctCount}`);
    //console.log(`Respuestas incorrectas: ${incorrectCount}`);
}
