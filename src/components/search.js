import React,{Component} from 'react';


export  default (props) => {
       return (
         <div className="col-lg-12">
         <h3 className="headerText"> Stock Tracker App </h3>
         <div className="input-group">
         <form onSubmit={props.fetchStocks} className="input-group">
           <input
             type="search"
             className="form-control"
             onChange={props.updateInput}
             placeholder="Enter stock symbol here"
             value={props.userVal}
            />
            <span className="input-group-btn">
			       <button type="submit" className="btn btn-secondary">Search</button>
			      </span>
          </form>
          </div>
         </div>
       );
   }
