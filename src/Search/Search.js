import './Search.css';
import React from 'react';

class Search extends React.Component {
  state = this.props.filters;

  handleChange = e => {
    const { value } = e.target;
    const type = value ? 'search' : 'trending';
    this.setState({ type, request: value });
  };

  render() {
    return (
      <div className="Search">
        <input
          value={this.props.request}
          type="text"
          placeholder="Search GIF"
          className="SearchBar"
          onChange={this.handleChange}
        />
        <button
          className="SearchButton"
          onClick={() => this.props.onFiltersChange(this.state)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
