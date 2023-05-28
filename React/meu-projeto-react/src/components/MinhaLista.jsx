import { useEffect, useState } from "react";

/* eslint-disable react/jsx-key */
const minhaLista = [
  { id: 'a', nome: 'Fruta' },
  { id: 'b', nome: 'Legumes' },
  { id: 'c', nome: 'Carnes' },
  { id: 'd', nome: 'Cereais' },
];

export default function MinhaLista() {
  // return minhaLista.map((item) => {
  //   return (
  //       <div key={item.id}>
  //           <h4>{item.nome}</h4>
  //       </div>
  //   )
  // conteudo da aula de listas e chaves
  // });
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(
    () => {
      if (pesquisa) {
        const novaLista = minhaLista.filter((item) => {
          return item.nome.toLowerCase().includes(pesquisa.toLowerCase());
        })
        setProdutos(novaLista);
      } else {
        setProdutos(minhaLista);
      }
    }
  , [pesquisa])

  return (
    <div>
      <h1>Efeitos Colaterais</h1>
      <input
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
      placeholder="pesquise aqui" />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.nome}</h4>
          </div>
        );
      })}
    </div>
  );
}
