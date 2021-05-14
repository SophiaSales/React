import React from "react";
import Identificacao from './componetes/Identificacao';
import Identificacao2 from './componetes2/Identificacao2';
class App extends React.Component{

  state = {
    nome:"Joao",
    apelido:"Ribeiro"
  }
  render(){
    return(
      <div>
        <p>Componente Principal</p>
        <Identificacao/>
      </div>
    )
  }
}

export default App;
