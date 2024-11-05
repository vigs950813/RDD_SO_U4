function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, incorrectFeedback) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
        const feedbackElement = document.getElementById(feedbackId);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackElement.innerHTML = '<span style="color: green;">Respuesta correcta</span>';
            } else {
                incorrectCount++;
                feedbackElement.innerHTML = `<span style="color: red;">Respuesta incorrecta. ${incorrectFeedback[selectedAnswer.value]}</span>`;
            }
        } else {
            incorrectCount++;
            feedbackElement.innerHTML = '<span style="color: blue;">Por favor, selecciona una respuesta</span>';
        }
    }

    checkAnswer('q1', 'b', 'feedback-q1', {
        'a': 'La interfaz de sistema de archivos permite la interacción general, no organiza los nombres de archivos. <br>Respuesta correcta: b)',
        'c': 'El control de permisos se encarga de gestionar el acceso, no organiza nombres. <br>Respuesta correcta: b)'
    });

    checkAnswer('q2', 'a', 'feedback-q2', {
        'b': 'Procesar gráficos es una función de la interfaz gráfica, no del sistema de archivos. <br>Respuesta correcta: a)',
        'c': 'Las conexiones de red se gestionan en otra capa del sistema operativo. <br>Respuesta correcta: a)'
    });

    checkAnswer('q3', 'b', 'feedback-q3', {
        'a': 'write() se utiliza para escribir en un archivo, no para cerrarlo. <br>Respuesta correcta: b)',
        'c': 'delete() no es una llamada al sistema para cerrar un archivo en Linux. <br>Respuesta correcta: b)'
    });

    checkAnswer('q4', 'c', 'feedback-q4', {
        'a': 'NTFS es un sistema de archivos de Windows que no utiliza inodos como ext4. <br>Respuesta correcta: c)',
        'b': 'FAT32 es otro sistema de archivos de Windows y no utiliza inodos. <br>Respuesta correcta: c)'
    });

    checkAnswer('q5', 'b', 'feedback-q5', {
        'a': 'Gestionar nombres y directorios se encarga de organizar archivos, no de permisos. <br>Respuesta correcta: b)',
        'c': 'La administración de espacio gestiona el almacenamiento, no el control de permisos. <br>Respuesta correcta: b)'
    });

    checkAnswer('q6', 'b', 'feedback-q6', {
        'a': 'La interfaz de usuario es diferente a la administración de espacio. <br>Respuesta correcta: b)',
        'c': 'La administración de la estructura de directorios no maneja espacio en disco. <br>Respuesta correcta: b)'
    });

    checkAnswer('q7', 'b', 'feedback-q7', {
        'a': 'La interfaz de sistema de archivos no organiza el árbol de directorios. <br>Respuesta correcta: b)',
        'c': 'El control de permisos gestiona accesos, no organiza directorios. <br>Respuesta correcta: b)'
    });

    checkAnswer('q8', 'b', 'feedback-q8', {
        'a': 'Los clústeres son unidades de almacenamiento, no almacenan permisos. <br>Respuesta correcta: b)',
        'c': 'Los bloques son unidades de almacenamiento, no permisos. <br>Respuesta correcta: b)'
    });

    checkAnswer('q9', 'b', 'feedback-q9', {
        'a': 'La administración de espacio controla el almacenamiento, no la creación de archivos. <br>Respuesta correcta: b)',
        'c': 'Gestión de nombres organiza directorios, no crea archivos. <br>Respuesta correcta: b)'
    });
}
