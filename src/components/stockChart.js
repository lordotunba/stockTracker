import React from 'react';
import {SparkLines,SparklinesLine} from 'react-sparklines';

const StockChart = (props) => {
    const stock = props.stock;
    console.log(stock);
    if(!stock){
      return( <div>Loading... </div>);
    }
    else{
        return(
          <div>
          <div>
           <section className="col-sm-6">
             <h3>{stock.symbol}</h3>
             <span className="pull-left">{stock.last}</span>
             <span className="pull-right">
                {stock.isStockHigh ? '+' :''} {stock.pctChange}%
               <small> {stock.change} </small>
             </span>
           </section>
           </div>
           <div>
           <SparkLines data={[5, 10, 5, 20]}>
             <SparklinesLine color="green" />
           </SparkLines>
         </div>
         </div>
        )
    }


}

export default StockChart;
