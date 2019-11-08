import React, { Component } from 'react';
import ItemModel from '../item/item.model';
import Item from '../item/item';
import { getItems, deleteItem } from '../api.js'


class Cart extends Component {
  state = {
    list: []
  }

  deleteItem = (itemToDelete) => {
      deleteItem(itemToDelete).then((response) => {
          this.setState({list: response})
      })

  }

  componentDidMount() {
    getItems()
        .then((response) => {
          this.setState({list: response});
        })
  }

  render() {
    return (
      <div className="App-item">
          {this.state.list.map((item) => <Item item={item}/>)}
      </div>
    )
  }
}

export default Cart;