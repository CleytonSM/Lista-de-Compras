window.onload = function() {
    let frutas = [];
    let doces = [];
    let congelados = [];
    let laticineos = [];
    
    const input = document.querySelector('input');
    const frutasList = document.getElementById('fruta');
    const docesList = document.getElementById('doce');
    const congeladosList = document.getElementById('congel')
    const laticineosList = document.getElementById('lat')
    const submitBtn = document.querySelector('#add')
    
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const nomeDoItem = input.value;
      const tipoDoItem = prompt(`Que tipo de alimento é ${nomeDoItem}?`);
  
      if (tipoDoItem === 'Frutas') {
        frutas.push(nomeDoItem);
        frutasList.textContent = `${frutas.join(', ')}`;
      } else if (tipoDoItem === 'Doces') {
        doces.push(nomeDoItem);
        docesList.textContent = `${doces.join(', ')}`;
      } else if (tipoDoItem === 'Laticíneos'){
        laticineos.push(nomeDoItem);
        laticineosList.textContent = `${laticineos.join(', ')}`;
      } else if (tipoDoItem === 'Congelados'){
        congelados.push(nomeDoItem);
        congeladosList.textContent = `${congelados.join(', ')}`
      }

  
      input.value = '';

  });
}
