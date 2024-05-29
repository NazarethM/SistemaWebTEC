document.addEventListener('DOMContentLoaded', function() {

    const historialBody = document.getElementById('historial-body');

    // Function to add a new record to the historical table
    function addRecordToTable(evento) {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${evento.nombreReunion}</td>
            <td>${evento.nombreAlumno}</td>
            <td>${evento.numeroControl}</td>
            <td>${evento.semestre}</td>
            <td>${evento.carrera}</td>
            <td>${evento.fecha}</td>
            <td>${evento.duracion}</td>
            <td><button onclick="imprimirPDF(${JSON.stringify(evento).replace(/"/g, '&quot;')})">Imprimir PDF</button></td>
        `;

        historialBody.appendChild(tr);
    }

    // Initialize historical table with existing data
    historialData.forEach(evento => {
        addRecordToTable(evento);
    });
});

function imprimirPDF(evento) {
    const { nombreAlumno } = evento;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const text = `El alumno ${nombreAlumno} ha sido agregado.`;

    doc.text(text, 10, 10);
    doc.save(`${nombreAlumno}_historial.pdf`);
}
