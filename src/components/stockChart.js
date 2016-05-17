import React from 'react';
import {Sparklines,SparklinesLine} from 'react-sparklines';

export default (props) => {
   const stock = props.stock;
   console.log(stock);
    if(!stock){
      return( <div>No Stocks to show </div>);
    }
    else{
        return(
          <div>
           <section className="col-sm-6">
             <h3>{stock.symbol}</h3>
             <span className="pull-left">{stock.last}</span>
             <span className="pull-right">
                {stock.isStockHigh ? '+' :''} {stock.pctChange}%
               <small> {stock.change} </small>
             </span>
           </section>

           <Sparklines data={[4,23,24,55]}>
              <SparklinesLine color="blue" />
          </Sparklines>
         </div>
        )
    }

  }
