import React from 'react';
import Container from '@material-ui/core/Container';
import Search from './Search/Search';
import PaginationControlled from './PaginationControlled/PaginationControlled';

class App extends React.Component {
  state = {
    filters: {
      type: 'trending',
      request: '',
      number: '12',
      offset: '0',
      more: false,
    },
    images: [],
    page: 1,
  };

  componentDidMount() {
    this.search({ type: 'trending' });
  }

  hadlePageChange = page => {
    this.setState({ page });
  };

  handleFiltersChange = filters => {
    if (parseInt(filters.number) < 1) filters.number = '1';
    if (parseInt(filters.number) > 50) filters.number = '50';
    if (filters.number === '' || filters.number.match('[.-]'))
      filters.number = '12';
    this.setState({ filters });
    this.search(filters);
  };

  search = async ({
    type,
    request = '',
    number = '12',
    offset = '0',
    more = false,
  }) => {
    const APIKEY = 'pjCHX4LrLMKOXW9FusMNZDv9QDB4lAXP';
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${type}?api_key=${APIKEY}&limit=${number}&q=${request}&offset=${offset}`
    );
    const responseJson = await response.json();
    let data = await responseJson.data;
    data = data.map(el => ({
      id: el.id,
      url: el.images.downsized.url,
      title: el.title,
    }));
    let page = 1;
    if (more) {
      data = [...this.state.images, ...data];
      page = this.state.page;
    }
    this.setState({
      images: data,
      page: page,
      more: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="md">
          <Search
            filters={this.state.filters}
            onFiltersChange={this.handleFiltersChange}
          />
          <PaginationControlled
            images={this.state.images}
            filters={this.state.filters}
            page={this.state.page}
            onPageChange={this.hadlePageChange}
            onFiltersChange={this.handleFiltersChange}
          />
        </Container>
      </div>
    );
  }
}

export default App;
