// Array para armazenar os dados dos estudantes
let students = [];

// Função para atribuir valores no formulário com lógica de estado
function assignGrades() {
    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const matricula = document.getElementById("matricula").value.trim();
    const nota = parseFloat(document.getElementById("nota").value.trim());

    // Validação para campos vazios
    if (id === "" || name === "" || matricula === "" || isNaN(nota)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // Lógica para determinar o estado do aluno
    let estado = "";
    if (nota >= 10) {
        estado = "Aprovado";
    } else if (nota >= 7 && nota < 10) {
        estado = "Recurso";
    } else {
        estado = "Reprovado";
    }

    // Adiciona os dados ao array
    students.push({
        id: id,
        name: name,
        matricula: matricula,
        nota: nota,
        estado: estado
    });

    alert(`Nota atribuída com sucesso! O aluno foi marcado como: ${estado}`);
    clearForm();
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById("studentForm").reset();
}

// Função para consultar os detalhes dos estudantes
function viewGrades() {
    if (students.length === 0) {
        alert("Nenhum estudante cadastrado ainda!");
        return;
    }

    const detailsContainer = document.getElementById("studentDetails");
    detailsContainer.innerHTML = ""; // Limpa os detalhes anteriores

    // Cria uma lista de estudantes
    students.forEach(student => {
        const studentInfo = `
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Nome:</strong> ${student.name}</p>
            <p><strong>Matrícula:</strong> ${student.matricula}</p>
            <p><strong>Nota:</strong> ${student.nota}</p>
            <p><strong>Estado:</strong> ${student.estado}</p>
            <hr>
        `;
        detailsContainer.innerHTML += studentInfo;
    });

    // Mostra a janela popup
    document.getElementById("popup").style.display = "block";
}

// Função para fechar o popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Função para guardar as notas (apenas exibe no console por enquanto)
function saveGrades() {
    alert("Os dados foram guardados localmente! (Implementação de backend necessária).");
    console.log("Estudantes:", students);
}
