import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const GameEquation = (props) => {
    const { value1, value2, value3, proposedAnswer } = props;
    return (
        <div className="equation">
            <p className="text">
                {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
            </p>
        </div>
    );
}


const GameChoice = (props) => {
    return (
        <button onClick={() => props.onChooseAnswer(props.choiceValue)}>
            {props.choiceValue === true ? "True" : "False"}
        </button>
    );
}


class App extends Component {

    state = {
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: Math.floor(Math.random() * 100 * 3),
        numQuestions: 1,
        numCorrect: 0
    }

    generateValue = () => {
        return Math.floor(Math.random() * 100);
    }

    getProposedAnswer = (value1, value2, value3) => {
        return Math.floor(Math.random() * 3) + value1 + value2 + value3;
    }

    newGame = () => {

        const [ value1, value2, value3 ] = [...Array(3).keys()].map((_) =>
            this.generateValue()
        )

        this.setState((currentState) => ({
            value1: value1,
            value2: value2,
            value3: value3,
            proposedAnswer: this.getProposedAnswer(value1, value2, value3),
            numQuestions: currentState.numQuestions + 1
        }))
    }

    isChoiceRight = (currentState, choice) => {
        return (currentState.value1 + currentState.value2 + currentState.value3
            === currentState.proposedAnswer === choice ? 1: 0
        );
    }

    registerChoice = (choice) => {
        this.setState((currentState) => ({
            numCorrect: currentState.numCorrect + this.isChoiceRight(currentState, choice)
        }));
        this.newGame();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <GameEquation
              value1={this.state.value1}
              value2={this.state.value2}
              value3={this.state.value3}
              proposedAnswer={this.state.proposedAnswer}
          />
          <GameChoice onChooseAnswer={this.registerChoice} choiceValue={true} />
          <GameChoice onChooseAnswer={this.registerChoice} choiceValue={false} />
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
