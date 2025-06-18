const form = document.getElementById('user-form');
const downloadButton = document.getElementById('download-excel');

// Recuperar datos guardados
let userList = JSON.parse(localStorage.getItem('userList')) || [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const minutes = document.getElementById('minutes').value;
    const date = document.getElementById('date').value;
    const department = document.getElementById('department').value;
    const team = document.getElementById('team').value;
    const coloresSelect = document.getElementById('colores');
    const comentarios = document.getElementById('comentarios').value;

    // Recoge todos los colores seleccionados
    const coloresSeleccionados = Array.from(coloresSelect.selectedOptions)
        .filter(opt => opt.parentElement.label === "Colores primarios")
        .map(opt => opt.text)
        .join(', ');

    // Recoge todas las cantidades seleccionadas (si están habilitadas)
    const cantidadSeleccionada = Array.from(coloresSelect.selectedOptions)
        .filter(opt => opt.parentElement.label === "Cantidad")
        .map(opt => opt.text)
        .join(', ');

    if (userName && minutes && date && department && team) {
        userList.push({
            userName,
            minutes,
            date,
            department,
            team,
            colores: coloresSeleccionados,
            cantidad: cantidadSeleccionada,
            comentarios
        });
        localStorage.setItem('userList', JSON.stringify(userList));
        form.reset();
        alert('Usuario añadido correctamente!');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

downloadButton.addEventListener('click', function() {
    if (userList.length > 0) {
        const excelData = userList.map(user => ({
            Usuario: user.userName,
            Minutos: user.minutes,
            Fecha: user.date,
            Departamento: user.department,
            Team: user.team,
            Colores: user.colores,
            Cantidad: user.cantidad,
            Comentarios: user.comentarios
        }));
        generateExcel(excelData);
    } else {
        alert('No hay datos para descargar.');
    }
});

function generateExcel(data) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserMinutes");
    XLSX.writeFile(workbook, "UserMinutesData.xlsx");
}

const coloresSelect = document.getElementById('colores');
const cantidadGroup = document.getElementById('cantidad-group');

function toggleCantidadGroup() {
    const selected = Array.from(coloresSelect.selectedOptions).map(opt => opt.value);
    // Mostrar el grupo de cantidad solo si "amar" está seleccionado
    cantidadGroup.disabled = !selected.includes('amar');
}

coloresSelect.addEventListener('change', toggleCantidadGroup);

// Inicializa el estado al cargar la página
toggleCantidadGroup();