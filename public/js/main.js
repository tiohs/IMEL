(function (win, doc) {
  const table = doc.querySelector('table');
  var idAluno = doc.querySelector('#idAluno');
  const form = doc.querySelector('form');
  const cadastrar = doc.querySelector('#cadastrar');
  var nota1 = doc.querySelector('#nota1');
  var nota2 = doc.querySelector('#nota2');
  var media = doc.querySelector('#media');

  table.addEventListener('click', (e) => {
    let clickAluno = e.target.classList.contains('aluno');
    nota1.value = 0;
    nota2.value = 0;
    if (clickAluno) {
      idAluno.value = e.target.firstElementChild.value;
    }
  });
  function onKeyUp(element) {
    element.onkeyup = () => {
      console.log(nota1.value, nota2.value);
      media.innerHTML = (parseInt(nota1.value) + parseInt(nota2.value)) / 2;
    };
  }
  onKeyUp(nota2);
  onKeyUp(nota1);

  cadastrar.addEventListener('click', () => {
    form.submit();
  });
})(window, document);
