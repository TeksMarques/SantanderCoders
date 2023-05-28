// O React é um framework JavaScript para criar interfaces de usuário.
// Dentro do React, tudo é um componente. Um componente é uma parte isolada de código que pode ser reutilizada em outros lugares.
// Os componentes são funções JavaScript que retornam um elemento React.
// Atualmente, se usa apenas functions, mas antigamente, e em raros casos, se usava classes.
// Se cria uma pasta componentes e dentro dela criamos um arquivo para cada componente.

// import MeuComponente from './components/MeuComponente';

// import BuscandoDados from './components/BuscandoDados';
import MeuContador from './components/MeuContador';
import MinhaLista from './components/MinhaLista';

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <h3>Aula: Estados e eventos</h3>
      <MeuContador />
      <h3>Aula: Listas</h3>
      <MinhaLista />
      <h3>Aula: Buscando dados</h3>
      {/* <BuscandoDados /> */}
    </div>
  );
}

export default App;
