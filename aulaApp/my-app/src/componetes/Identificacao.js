import React from 'react';
import Apelido from './Apelido';
import Nome from './Nome';

class Identificacao extends React.Component{
    render(){
        return(
            <div>
                <Nome/>
                <Apelido/>
            </div>
        )
    }
}

export default Identificacao;