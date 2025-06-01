import React from 'react';

// entendendo os props e componentes
const Bemvindo1 = () => <h2>Bem Vindo(a)</h2>

// ou
const Bemvindo = () => {
  return(
    <div>
      <h2>Bem vindo(a)</h2>
    </div>
  )
}

//utlizando props
const Bemvindo2 = (props) => { // o componente está tratando de cada nome de forma independente
  return(
    <div>
      <h2>Bem vindo(a) { props.nome }  </h2> 
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}
//criando um componente 
function App() {
  return (
    <div>
      Olá Mundo!
      <Bemvindo1/>
      <Bemvindo/>
      <Bemvindo2 nome="Joyce" idade="22"/>
      <Bemvindo2 nome="Raquel" idade="46"/>
      
        <h1>React</h1>
    </div>
  );
}


export default App;