import React from 'react';
import StockList from './stockList';


const StockLists = (props) => {

const handleRenderStocks = props.stocks.map((stock,key) => {
              console.log(stock,key);
                return(
                   <StockList
                     key={key}
                     stock={stock}
                     onStockSelect={props.selectedStock}
                   />
           )
  });

  return (
         <ul className="col-md-4 list-group">
           {handleRenderStocks}
         </ul>
        );

}

export default StockLists;
