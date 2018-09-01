
//只能设置函数里的对象和属性
class Box1 extends React.Component {     //App继承React组件
    constructor(props) {    //构造函数（传入属性）
        super(props)
        this.state = {      //自有属性  
            number: 0
        }
    }
    add() {
        this.setState({ //设置状态
            number: this.state.number + 1
        })
    }
    minus() {
        this.setState({ 
            number: this.state.number - 1
        })
    }
    render() {  //局部render
        return (//.bind(this)来绑定this    
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.add.bind(this)}>+</button>   
                <button onClick={this.minus.bind(this)}>-</button>
                {this.props.name}
            </div>
        )
    }
}

class Box2 extends React.Component {     
    constructor(props) {  
        super(props)
        this.state = {     
            number: 0
        }
    }
    add() {
        this.setState({ 
            number: this.state.number + 1
        })
    }
    minus() {
        this.setState({ 
            number: this.state.number - 1
        })
    }
    render() {  
        return (  
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.add.bind(this)}>+</button>   
                <button onClick={this.minus.bind(this)}>-</button>
                {this.props.name}
            </div>
        )
    }
}

function App(){  //首字母必须大写
    return(
        <div>
        <Box1 name='jake'/>
        <Box2 name='rose'/>
        </div>  
    )
}

render()
function render() {
    ReactDOM.render(
        <App />, //React.createlement(App)
        document.querySelector('#root')
    )
}
 