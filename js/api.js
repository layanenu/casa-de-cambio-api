const endPoint = 'https://api.exchangerate.host/latest?base=';

// DUAS FORMAS DE FAZER:

const fecthCurrency = (moeda) => {
  const caminho = `${endPoint}${moeda}`;
  return fetch(caminho)
  .then ((resposta) => resposta.json())
  .then((dados) => dados)
  .catch((erro) => erro);
};

// const fecthCurrencyAsyncAwait = async (moeda) => {
//   try{
//     const caminho = `${endPoint}${moeda}`;
//     const resultado = await fetch(caminho);
//     const resultadoJSON = await resultado.json();
//     return resultadoJSON;
//   } catch (error){
//     return error;
//   }
// }