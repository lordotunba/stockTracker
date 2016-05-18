import React from 'react';
import {Sparklines,SparklinesLine,SparklinesSpots} from 'react-sparklines';

export default (props) => {
   const stock = props.stock;
   console.log(stock);
    if(!stock){
      return( <div>No Stocks to show </div>);
    }
    else{
        return(
          <div className="col-lg-8 wrapper">
           <section className="col-lg-8 widget">
             <h4 className="symbol">{stock.symbol}</h4>
             <span className="stock-last">{stock.last}</span>
             <span className="stock-pct">
                {stock.isStockHigh ? '+' :''} {stock.pctChange}%
               <small className="stock-change"> {stock.change} </small>
             </span>
           </section>
           <span className="spark">
           <Sparklines
                width={400}
                margin={50}
                data={[stock.high,stock.low,stock.prevClose,stock.open,stock.last]}>
              <SparklinesLine style={{ strokeWidth: 3, stroke: "#E083A1", fill: "none" }} />
          </Sparklines>
          </span>
         </div>
        )
    }

  }
