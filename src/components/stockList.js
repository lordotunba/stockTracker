import React from 'react';


export default ({stock,onStockSelect}) => {
   let pillClass = "label label-default label-pill pull-xs-right";
   let toggleClass = stock.isStockHigh ? 'green '+pillClass : 'red '+pillClass;
    return (
             <li className="list-group-item" onClick={() => onStockSelect(stock)}>
               <span className={toggleClass}>
                {stock.isStockHigh ? '+' :''}{stock.pctChange}%
               </span>
               {stock.symbol} {stock.last}
            </li>
            );
}
