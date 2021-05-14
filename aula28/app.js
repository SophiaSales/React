class App extends React.Component{
    constructor(){
        super()
        this.state = {
            texto: "Esse é o texto da textarea"
        }
    }
    alterarTexto = (event) =>{
        this.setState({texto: event.target.value})
    }
    render(){
        return(
            <div>
                <textarea onChange={this.alterarTexto} value={this.state.texto} cols="20" rows="5"></textarea>
                <h3>O texto é</h3>
                <p>{this.state.texto}</p>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
