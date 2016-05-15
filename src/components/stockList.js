import React from 'react';


const StockList = ({stock,onStockSelect}) => {
    return (
             <li onClick={() => onStockSelect(stock)}>
               <div className="">{stock.symbol}</div>
               <div className="">{stock.last} </div>
               <div className="">{stock.pctChange}% </div>
            </li>
            );
}

export default StockList;
