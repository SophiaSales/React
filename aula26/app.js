class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        let estilo = {
            color:"red",
            fontSize: '2em'
        }

        let estilo2 = {
            border:"1px solid red"
        }

        return(
            <div>
                <p style ={estilo2}>Texto com estilo</p>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
