import './Search.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

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
        <TextField
          id="standard-basic"
          label="Search GIF"
          value={this.props.request}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          onClick={() => this.props.onFiltersChange(this.state)}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
