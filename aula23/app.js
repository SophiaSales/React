class App extends React.Component{
    render(){
        const socios = [
            {
                id:1,
                nome:" Joao", 
                idade:46
            },
            {
                id:2,
                nome:" Ana",
                idade:25
            }
        ]
        const final = socios.map(socio =><MostrarSocio key={socio.id} socio={socio}/>)
        return(
            <div>
                {final}
            </div>
        )
    }
}

class MostrarSocio extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>id:{this.props.socio.id}</p>
                <p>Nome:{this.props.socio.nome}</p>
                <p>Idade: {this.props.socio.idade}</p>
            </div>
        )

    }
}

ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
