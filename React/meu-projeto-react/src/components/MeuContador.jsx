import { useState } from 'react';  // use state é um hook, que é uma função que começa com use e que permite que a gente use recursos do react dentro de um componente.
import styles from './button.module.css';

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  // function diminuir() {
  //   setContador(contador - 1);
  // }

  // if (contador > 5) {
  //   // outra forma de fazer a renderização condicional
  //   return (
  //     <div>
  //       <h1>Valor muito alto!!</h1>
  //       <button onClick={aumentar}>aumentar</button>
  //       <button onClick={diminuir}>diminuir</button>
  //     </div>
  //   );
  // }

  return (
    <div className='container'>
      <h1>Meu Contador:</h1>
      {/* { contador > 9 ? <h2>Valor muito alto</h2> : null} conteudo aula 3, renderização condicional */}
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>aumentar</button>
      {/* <button onClick={diminuir}>diminuir</button> */}
    </div>
  );
}
