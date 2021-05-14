class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let cor = this.props.cor ? "cor-vermelho" : ""
        let tamanho = this.props.tamanho ? 'tamanho' : ''

        return(
            <div>
                <p className = {`${cor} ${tamanho}`}>Texto com estilo</p>
            </div>
        )
    }
}


ReactDOM.render(<App cor={true} tamanho={true}/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
