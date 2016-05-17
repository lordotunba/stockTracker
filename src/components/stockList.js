import React from 'react';


export default ({stock,onStockSelect}) => {
    return (
             <li onClick={() => onStockSelect(stock)}>
               <div className="">{stock.symbol}</div>
               <div className="">{stock.last} </div>
               <div className={stock.isStockHigh ? 'green': 'red'}> {stock.isStockHigh ? '+' :''} {stock.pctChange}% </div>
            </li>
            );
}
