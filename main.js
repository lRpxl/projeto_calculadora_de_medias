const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emojin celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emojin decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado Aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado Reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adiocionarLinha();
    atualizeTabela();
    atualizaMediaFinal();
});

function adiocionarLinha() {
    const inputNomeatividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeatividade.value)) {
        alert(`A atividade : ${inputNomeatividade.value} ja foi inserida`);
    } else {
    atividades.push(inputNomeatividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeatividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</td>';

    linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeatividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizeTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas [i];
    }

    return somaDasNotas / notas.length;
    
}