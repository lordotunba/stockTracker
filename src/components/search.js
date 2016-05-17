import React,{Component} from 'react';


export  default (props) => {
       return (
         <div>
         <h3> Stock Tracker App </h3>
         <form onSubmit={props.fetchStocks} className="input-group">
           <input
             type="search"
             className="input-group"
             onChange={props.updateInput}
             placeholder="Enter multiple stocks symbol here"
             value={props.userVal}
            />
            <span className="input-group-btn">
			       <button type="submit" className="btn btn-secondary">Submit</button>
			      </span>
          </form>
         </div>
       );
   }
