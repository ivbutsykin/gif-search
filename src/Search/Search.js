import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Search extends React.Component {
  state = this.props.filters;

  handleChange = e => {
    const { value } = e.target;
    const type = value ? 'search' : 'trending';
    this.setState({ type, request: value });
  };

  render() {
    return (
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={10}>
          <TextField
            label="Search GIF"
            fullWidth
            margin="normal"
            value={this.props.request}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={() => this.props.onFiltersChange(this.state)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
