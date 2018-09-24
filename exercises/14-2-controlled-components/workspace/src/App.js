import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ShoppingForm, ShoppingDeleteItem, ShoppingList } from './Shopping.js';


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ShoppingForm
            addItemHandler={this.addItem}
            inputValue={this.state.value}
            inputOnChange={this.handleChange}
            inputIsEmpty={this.inputIsEmpty()}
        />
        <ShoppingDeleteItem
            deleteLastItemHandler={this.deleteLastItem}
            disabled={this.noItemsFound()}
        />

        <p className="items">Items</p>
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;
