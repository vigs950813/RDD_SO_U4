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
    checkAnswer('q1', 'b', 'feedback-q1', 'La optimización implica reorganizar datos para mejorar el rendimiento.');
    checkAnswer('q2', 'a', 'feedback-q2', 'La desfragmentación de disco mejora el acceso a los archivos.');
    checkAnswer('q3', 'b', 'feedback-q3', 'La recuperación se refiere a restaurar datos tras un fallo.');
    checkAnswer('q4', 'b', 'feedback-q4', 'La consistencia garantiza que los datos no se pierdan.');
    checkAnswer('q5', 'b', 'feedback-q5', 'Journaling ayuda a mantener la consistencia registrando cambios.');
    checkAnswer('q6', 'c', 'feedback-q6', 'El desafío es equilibrar rendimiento, integridad y seguridad.');
    checkAnswer('q7', 'b', 'feedback-q7', 'El rendimiento se mide por la velocidad de lectura y escritura.');
    checkAnswer('q8', 'b', 'feedback-q8', 'La fragmentación dificulta la recuperación dispersando datos.');
    checkAnswer('q9', 'c', 'feedback-q9', 'Las copias de seguridad son puntos de restauración para datos.');
    checkAnswer('q10', 'b', 'feedback-q10', 'Usar SSD mejora el rendimiento en comparación con HDD.');
    checkAnswer('q11', 'a', 'feedback-q11', 'La latencia es el tiempo para completar una operación de archivo.');

    // Puedes mostrar el número total de respuestas correctas si lo deseas
    //console.log(`Respuestas correctas: ${correctCount}`);
    //console.log(`Respuestas incorrectas: ${incorrectCount}`);
}
