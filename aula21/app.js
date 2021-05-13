class App extends React.Component{
    render(){
        const nomes = [
            'Joao', 
            'Ana', 
            'Carlos'
        ]
        const pessoas =[
            {
                nome: "Joao",
                profissao: "Programador"
            },
            {
                nome:"Ana",
                profissao:"Professora"
            },
            {
                nome: "Carlos",
                profissao: "Carpinteiro"
            },
        ]
        const final = pessoas.map(pessoa => <h3>{pessoa.nome} exerce a profissao de {pessoa.profissao}</h3>)
        return(
            <div>
                {final}
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
