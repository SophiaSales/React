class App extends React.Component{
    render(){
        const noticias =[
            {
                titulo:"Noticia 1",
                texto:"Texto da noticia 1",
                autor:"Autor 1"
            },
            {
                titulo:"Noticia 2",
                texto:"Texto da noticia 2",
                autor:"Autor 2"
            },
            {
                titulo:"Noticia 3",
                texto:"Texto da noticia 3",
                autor:"Autor 3"
            }
        ]
        
        const final = noticias.map(noticia => <Noticia noticia ={noticia}/>)

        return(
            <div>
                <h2>Noticias</h2>
                <hr/>
                {final}
            </div>
        )
    }
}

class Noticia extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.noticia.texto}</p>
                <small><i>{this.props.noticia.autor}</i></small>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
