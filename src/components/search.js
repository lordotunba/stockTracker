import React,{Component} from 'react';


class Search extends Component {
   render(){
       return (
         <div>
         <h3> Stock Tracker App </h3>
         <form onSubmit={this.props.fetchStocks} className="input-group">
           <input
             type="search"
             className="input-group"
             onChange={this.props.updateInput}
             placeholder="Enter multiple stocks symbol here"
             value={this.props.userVal}
            />
            <span className="input-group-btn">
			       <button type="submit" className="btn btn-secondary">Submit</button>
			      </span>
          </form>
         </div>
       );
   }
 }

export default Search;
