import React, {useState} from "react";


const App  = () =>{
  const [Nome, setNome] = useState("Joao");
  const AlterarNome = () => setNome("Joaquim")

    return(
      <div>
        <p>o meu nome é: {Nome}</p>
        <button onClick={()=>AlterarNome}>Alterar</button>
      </div>
    )
}

export default App;
