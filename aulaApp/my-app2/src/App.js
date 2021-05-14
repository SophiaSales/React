import React, {Component} from "react";
import Identificacao from './componentes/Identificacao';

class App extends Component{

  state = {
    nome:"Joao",
    sobrenome:"Ribeiro"
  }
  render(){
    return(
      <div>
        <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome}/>
      </div>
    )
  }
}

export default App;
