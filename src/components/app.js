import React from 'react';
import { Component } from 'react';
import Search from './search';
import StockLists from './stockLists';

export default class App extends Component {

  render() {
    return (
        <div>
         <Search />
         <StockLists />
        </div>
    );
  }
}
