(function (win, doc) {
  const table = doc.querySelector('table');
  var idAluno = doc.querySelector('#idAluno').value;

  table.addEventListener('click', (e) => {
    let clickAluno = e.target.classList.contains('aluno');
    if (clickAluno) {
      idAluno = e.target.firstElementChild.value;
      console.log(idAluno);
    }
  });
  init();
  function init() {}
})(window, document);
