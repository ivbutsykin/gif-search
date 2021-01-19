import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Search extends React.Component {
  state = this.props.filters;

  handleRequestChange = e => {
    const { value } = e.target;
    const type = value ? 'search' : 'trending';
    this.setState({ type, request: value });
  };

  handleNumberChange = e => {
    const { value } = e.target;
    this.setState({ number: value });
  };

  render() {
    return (
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={7} md={8}>
          <TextField
            label="Search GIF"
            fullWidth
            margin="normal"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <TextField
            label="Number (1-50)"
            type="number"
            margin="normal"
            value={this.state.number}
            InputLabelProps={{
              shrink: true,
            }}
            error={
              parseInt(this.state.number) < 1 ||
              parseInt(this.state.number) > 50 ||
              this.state.number.includes('-') ||
              this.state.number === ''
            }
            onChange={this.handleNumberChange}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
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
