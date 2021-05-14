class App extends React.Component {
    constructor() {
        super()
        this.state={
            nome: "Joao"
        }
        console.log("Contrutor");
    }
    componentDiMount(){
        console.log("Motado");
    }
    Alterar = () =>{
        this.setState({nome: "Joaquim"})
    }
    render() {
        console.log('render');
        return (
            <div>
                Ola {this.state.nome}
                <br/>
                <button onClick={this.Alterar}>Alterar</button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
