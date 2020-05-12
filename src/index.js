import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class AppCalculatrice extends Component {

  constructor(props) {
    super(props)
    this.state = {
      result: "",
      inputValue: "",
    }
  }

  addInInput = i => {
    var result = this.calcul(this.state.inputValue.concat(i))
    this.setState({ result: result, inputValue: this.state.inputValue.concat(i) })
  }

  removeOne() {
    var str = this.state.inputValue
    var result = this.calcul(str.substring(0, str.length - 1))
    this.setState({ result: result, inputValue: str.substring(0, str.length - 1) })
  }

  removeAll() {
    this.setState({ result: "", inputValue: "" })
  }

  calcul(str) {
    if (this.calculable(str)) {
      return eval(str);
    } else {
      return "ERROR";
    }
  }

  calculable(str) {
    try {
      eval(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className="calculatrice">

        <input type="text" disabled placeholder={this.state.inputValue}></input>
        <table>
          <tr>
            <td><button onClick={() => this.addInInput("1")}>1 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("2")}>2 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("3")}>3 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("x")}>x &nbsp;</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.addInInput("4")}>4 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("5")}>5 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("6")}>6 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("-")}>- &nbsp;</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.addInInput("7")}>7 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("8")}>8 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("9")}>9 &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("+")}>+ &nbsp;</button></td>
          </tr>
          <tr>
            <td><button onClick={() => this.removeOne()}>C &nbsp;</button></td>
            <td><button onClick={() => this.addInInput("0")}>0 &nbsp;</button></td>
            <td><button onClick={() => this.removeAll()}>CE</button></td>
          </tr>
        </table>
        <div>Résultat :<input type="text" disabled placeholder={this.state.result}></input></div>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<AppCalculatrice />, rootElement)