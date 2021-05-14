class App extends React.Component{
    render(){
        const nomes = ["Joao", "Ana", "Carlos", "Ana"]
        const final = nomes.map((nome, index) => <h3 key={index}>{index} - {nome}</h3>) //colocando o index é possivel adicionarnos elementos igualis no array
        return(
            <div>
                {final}
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
