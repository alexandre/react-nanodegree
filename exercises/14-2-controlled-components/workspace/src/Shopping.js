import React, { Component } from 'react';


const ShoppingItemInput = (props) => {

    const { item, onChangeHandler } = props;

    return (
        <input
          type="text"
          placeholder="Enter New Item"
          value={item}
          onChange={onChangeHandler}
        />
    );
};


const ShoppingAddItem = (props) => {
    return <button disabled={props.disabled}>Add</button>
};


const ShoppingDeleteItem = (props) => {

    const { deleteLastItemHandler, disabled } = props;

    return (
        <button onClick={deleteLastItemHandler} disabled={disabled}>
          Delete Last Item
        </button>
    );
};


const ShoppingListItem = (props) => {
    return <li key={props.key}>{props.item}</li>
};


const ShoppingList = (props) => {
    return (
        <ol className="item-list">
            {props.items.map((item, index) =>
                <ShoppingListItem key={index} item={item} />
            )}
        </ol>
    );
};


class ShoppingForm extends Component {
    render(){
        const {
            addItemHandler, inputValue, handleChange, inputOnChange,
            inputIsEmpty
        } = this.props;
        return (
            <form onSubmit={addItemHandler}>
                <ShoppingItemInput
                    item={inputValue}
                    onChangeHandler={inputOnChange}
                />
                <ShoppingAddItem disabled={inputIsEmpty} />
            </form>
        );
    };
}

export { ShoppingDeleteItem, ShoppingForm, ShoppingList };
