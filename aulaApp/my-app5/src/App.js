import React, {Component}from "react";
import Navegacao from './components/Navegacao'
import Home from './components/Home'
import Servicos from './components/Servicos'
import Contatos from './components/Contatos'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component{

  render(){
    return(
      <Router>
      <div>
        <Navegacao/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/servicos"><Servicos/></Route>
          <Route path="/contatos"><Contatos/></Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
