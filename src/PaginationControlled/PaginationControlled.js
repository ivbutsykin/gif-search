import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import GifItem from '../GifsList/GifItem/GifItem';

class PaginationControlled extends React.Component {
  state = {
    filters: this.props.filters,
    page: 1,
  };

  handleChange = (event, value) => {
    this.setState({ page: value });
  };

  render() {
    const { images } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {images
              .slice((this.state.page - 1) * 12, this.state.page * 12 - 1)
              .map(obj => (
                <Grid item xs={6} sm={4} md={3} key={obj.id}>
                  <GifItem src={obj.url} alt={obj.title} />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Pagination
                count={Math.ceil(this.props.images.length / 12)}
                color="primary"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default PaginationControlled;
