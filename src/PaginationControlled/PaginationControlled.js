import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import GifItem from './GifItem/GifItem';
import Button from '@material-ui/core/Button';

class PaginationControlled extends React.Component {
  state = {
    filters: this.props.filters,
  };

  handleChange = (event, value) => {
    this.props.onPageChange(value);
  };

  handleClick = e => {
    let number = '12';
    if (this.props.images.length % 12 === 0) {
      const value = this.props.page + 1;
      this.props.onPageChange(value);
    }
    if (this.props.images.length % 12 !== 0) {
      number = (
        12 +
        (12 - Math.ceil(this.props.images.length % 12))
      ).toString();
    }
    this.setState(
      {
        filters: {
          type: this.props.filters.type,
          request: this.props.filters.request,
          number: number,
          offset: this.props.images.length,
          more: true,
        },
      },
      () => this.props.onFiltersChange(this.state.filters)
    );
  };

  render() {
    const { images } = this.props;
    const { page } = this.props;
    let showMoreButton;
    if (this.props.page === Math.ceil(this.props.images.length / 12)) {
      showMoreButton = (
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleClick}
              >
                Show more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {images
              .slice((this.props.page - 1) * 12, this.props.page * 12 - 1)
              .map(obj => (
                <Grid item xs={6} sm={4} md={3} key={obj.id}>
                  <GifItem src={obj.url} alt={obj.title} />
                </Grid>
              ))}
          </Grid>
        </Grid>
        {showMoreButton}
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Pagination
                page={page}
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
