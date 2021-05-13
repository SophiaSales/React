class App extends React.Component{

    constructor(){
        super()
        this.state = {
            tempoBom: true
        }
    }
    render(){

        return this.state.tempoBom && <p>O tempo esta bom.</p>

        // return(                        usando metodo ternario
        //     this.state.tempoBom ? <p>O tempo esta bom.</p> : <p>O tempo esta mau.</p>
        // )

        // let texto                       usando com uma variavel
        // if (this.state.tempoBom) {
        //     texto = <p>O tempo esta bom.</p>
        // }else{
        //     texto = <p>O tempo esta mau.</p> 
        // }
        // return texto

        // if (this.state.tempoBom) {       usando como o return
        //     return <p>O tempo esta bom.</p>
        // }else{
        //     return  <p>O tempo esta bom.</p>
        // }
    }
}
ReactDOM.render(<App/>,document.getElementById('root')); //com o babel é possivel escrever codigo em html assim