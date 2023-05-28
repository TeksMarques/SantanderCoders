import { useEffect, useState } from 'react';

// const tarefas = [
//     { id: 'a', title: 'Estudar React' },
//     { id: 'b', title: 'Estudar JavaScript' },
//     { id: 'c', title: 'Estudar HTML' },
//     { id: 'd', title: 'Estudar CSS' },
//   ];

export default function BuscandoDados() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resposta = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const dados = await resposta.json();
      return dados;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {tarefas.map((item) => {
          return (
            <div key={item.id}>
              <li >
                {item.title} 
                {item.completed ? ' - Completo' : null }
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
