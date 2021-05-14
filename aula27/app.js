class App extends React.Component{
    constructor(){
        super()
        this.state = {
            nome: "Joao"
        }
    }
    
    alterarNome = (event) =>{
        this.setState({nome: event.target.value})
    }

    render(){
        return(
            <div>
                <input type="text" value = {this.state.nome} onChange={this.alterarNome}></input>
                <p>Valor: {this.state.nome}</p>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
