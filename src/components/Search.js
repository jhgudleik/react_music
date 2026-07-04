import './Search.css';
import React from 'react';

class Search extends React.Component {
 state = {
    search:""
  }
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMusic(this.state.search);
    }   
  }
  render() {
    return (
      <div className="search">
        <input type="search" 
        placeholder="Search..." 
        value={this.state.search} 
        onChange={(e) => this.setState({search: e.target.value})} 
        onKeyDown={this.handleKey}
        />
        <button className='btn' onClick={() => this.props.searchMusic(this.state.search)}>Search</button>
      </div>
    );
  }

}

export default Search;
