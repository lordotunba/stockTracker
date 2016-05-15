import React from 'react';
import { Component } from 'react';
import Search from './search';
import axios from 'axios';
import StockLists from './stockLists';

let url = 'https://dcs-qa-services.tweddletech.com/api-1.0/stocks?command=getQuotes&output=json';
let partnerId ='&partnerId=4de68703-5fe3-4477-8d18-0a63b452d534';
let userCred = '&userLoginId=phvuser33@nuance.com&userPassword=Tweddle2';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
             userVal:'',
             stocks:[],
             selectedStock:null
           };
  }

  makeApiCall(stocks){
   let stockUrl = `${url}${partnerId}${userCred}&symbols=${stocks}`;
    axios.get(stockUrl)
         .then((response) => {
           const respData = response.data.results.data.quoteInfo.quotes.quote;
           this.setStockObj(respData);
         });
  }

handleFetchStocks(e){
  e.preventDefault();
  this.makeApiCall(this.state.userVal);
  this.setState({userVal:''});

}

setStockObj(respData){
  if(respData['pctChange'] < 0){
     respData['isStockHigh'] = false;
  }
  else{
    respData['isStockHigh'] = true;
  }
  this.setState({stocks:this.state.stocks.concat([respData])});
}


handleInputChange(e){
  this.setState({userVal:e.target.value});
}

getSelectedStock(selectedStock){
  this.setState({selectedStock});

}

  render() {
    return (
        <div>
         <Search
           userVal={this.state.userVal}
           fetchStocks={this.handleFetchStocks.bind(this)}
           updateInput={this.handleInputChange.bind(this)}
           />
         <StockLists
           stocks={this.state.stocks}
           selectedStock = {this.getSelectedStock.bind(this)}
          />
        </div>
    );
  }
}
