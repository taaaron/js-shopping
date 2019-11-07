import React, { Component } from 'react';
import ItemModel from '../item/item.model';
import Item from '../item/item';
import { getItems } from '../api.js'

class Cart extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    getItems()
        .then((response) => {
          this.setState({list: response});
        })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App-item">
          {this.state.list.map((item) => <Item item={item}/>)}
      </div>
    )
  }
}

export default Cart;