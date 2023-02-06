window.addEventListener('load', function(){
    // variáveis
    let armazenando = [];


    // constantes lista
    const armazemList = document.getElementById('armazena-categorias');
    const input = document.getElementById('categorias');
    const addBnt = document.getElementById('adicionar');
    const finishBnt = document.getElementById('finalizar');

    // o botão adicionar está adicionando as categorias
    addBnt.addEventListener('click', (event) => {
        event.preventDefault();
        const nomeDoItem = input.value;
        if (input.value == 0){
            alert('[ERRO] Adicione um valor');
        } else{
            armazenando.push(nomeDoItem);
            armazemList.textContent = `${armazenando.join(', ')}`;
        }
        
    })
    
    // o botão finish está redirecionando para a nova aba
    finishBnt.addEventListener('click', (event) => {
        localStorage.setItem('categorias', JSON.stringify(armazenando));
        window.location.href = 'produtos.html';
     })
})

