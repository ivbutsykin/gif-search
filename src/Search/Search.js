import './Search.css';
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.filters.request = e.target.value;
  }

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          placeholder="Search GIF"
          className="SearchBar"
          onChange={this.handleChange}
        />
        <button
          className="SearchButton"
          onClick={() => this.props.onFiltersChange(this.props.filters)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
