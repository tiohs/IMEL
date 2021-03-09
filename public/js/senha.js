((win, doc) => {
  const tableAluno = doc.querySelector('#alu');
  const tableCola = doc.querySelector('#cola');
  const idAluno = doc.querySelector('#idAluno');
  const idColaborador = doc.querySelector('#idColaborador');

  tableAluno.addEventListener('click', (e) => {
    let clickAluno = e.target.classList.contains('aluno');
    if (clickAluno) {
      idAluno.value = e.target.firstElementChild.value;
    }
  });
  tableCola.addEventListener('click', (e) => {
    let clickAluno = e.target.classList.contains('cola');
    if (clickAluno) {
      idColaborador.value = e.target.firstElementChild.value;
    }
  });
})(window, document);
