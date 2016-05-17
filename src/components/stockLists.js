import React from 'react';
import StockList from './stockList';

export default (props) => {
const handleRenderStocks = props.stocks.map((stock,key) => {
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
