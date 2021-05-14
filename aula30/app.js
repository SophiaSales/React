class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
    }

    alterarUsername = event =>{
        this.setState({username: event.target.value})
    }
    alterarPassword = event =>{
        this.setState({password: event.target.value})
    }
    submeterForm = event =>{
        console.log("Username: " + this.state.username);
        console.log("Password: " + this.state.password);
        event.preventDefault()  //funçao que subete o formulario
    }
    
    render() {
        return (
            <form onSubmit={this.submeterForm}>
                <input type="text" value={this.state.username} onChange={this.alterarUsername} placeholder="Username"/>
                <br/>
                <input type="password" value={this.state.password} onChange={this.alterarPassword} placeholder="Password"/>
                <br/>
                <input type="submit" value="Entrar"/>
            </form>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
