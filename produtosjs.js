window.onload = function(){
    // variáveis
    let armazenando = [];

    // constantes
    const armazemListAlimentos = document.getElementById('armazena_alimento');
    const inputAlimentos = document.getElementById('alimento');
    const addBntAlimentos = document.getElementById('adicionarbtn');
    const remBntAlimentos = document.getElementById('remover');
    const categoriasArmazenadas = JSON.parse(localStorage.getItem('categorias'))
    const select = document.getElementById('item-category');
    const finalizarBntAlimentos = document.getElementById('finalizarbnt');

    // Personalização
    select.style.padding = '20px 35px 20px 35px';
    select.style.marginLeft = '380px';

    if (categoriasArmazenadas) {
        categoriasArmazenadas.forEach(function(categoria) {
          const option = document.createElement('option');
          option.value = categoria;
          option.textContent = categoria;
          select.appendChild(option);
        });
      } else {
        console.error('Nenhuma categoria encontrada');
      }
    
    addBntAlimentos.addEventListener('click', (event) =>{
        event.preventDefault();
        const nomeDoItem = inputAlimentos.value;
        const categoriaSelecionada = select.options[select.selectedIndex].value;
        if (inputAlimentos.value == 0){
            alert('[ERRO] Insira um alimento');
        } else{
            armazenando.push(`${categoriaSelecionada}: ${nomeDoItem}`);
            armazemListAlimentos.textContent = `${armazenando.join(', ')}`;
        }
    })
    remBntAlimentos.addEventListener('click', (event) =>{
      event.preventDefault();
      const nomeDoItem = inputAlimentos.value;
      const categoriaSelecionada = select.options[select.selectedIndex].value;
      if (inputAlimentos.value == 0){
        alert('Insira um valor');
      } else{
        armazenando.pop(`${categoriaSelecionada}: ${nomeDoItem} `);
         armazemListAlimentos.textContent = `${armazenando.join(', ')}`;
      }
  });

  finalizarBntAlimentos.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`Sua lista é ${armazenando} `);
  });
}