class App extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "item3"
        }
    }

    alterarItem = event =>{
        this.setState({item: event.target.value})
    }

    render() {
        return (
            <div>
                <select value={this.state.item} onChange={this.alterarItem}>
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                </select>
                <p>Item selecionado: {this.state.item}</p>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root')); //com o babel é possivel escrever codigo em html assim
