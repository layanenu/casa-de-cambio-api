const btnPesquisa = document.getElementById("search-button");
const btnSalvar = document.getElementById('save');
const input = document.getElementById("currency-input");
const listCurrencys = document.getElementById("currency-list");

const criarList = (moeda) => {
  const li = document.createElement('li');
  li.innerHTML = `${moeda[0]}: ${moeda[1]}`;
  listCurrencys.appendChild(li);
}

btnSalvar.addEventListener('click', () => { //para salvar no localstorage
  const listaSalva = listCurrencys.innerHTML; 
  localStorage.setItem('savedList', listaSalva);
})

btnPesquisa.addEventListener("click", async () => { //adc escutador no btnpesquisa
  const valorInput = input.value; //pegar o valor que foi digitado
  // console.log(valorInput);
  const retorno = await fecthCurrency(valorInput); //vai chamar a funcao passando a moeda
  // console.log(retorno.rates);
  const arrayDados = Object.entries(retorno.rates); //transformar em array para facilitar a manipulacao; o object.entries pega o objeto rates e transforma cada chave e valor em um array em pares
  // console.log(arrayDados);
  listCurrencys.innerHTML = ''; //VAI PRECISAR NO PROJETO PARA LIMPAR O CARRINHO
  arrayDados.forEach((moeda) => { //para cada moeda vai criar um novo li (criarlist)
    criarList(moeda);
  });
});

window.onload = () => { //para já deixar carregado ao abrir a pagina
  listCurrencys.innerHTML = localStorage.getItem('savedList');
};