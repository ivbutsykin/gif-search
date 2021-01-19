import Search from './Search/Search';
import GifsList from './GifsList/GifsList';
import React from 'react';
import Container from '@material-ui/core/Container';

class App extends React.Component {
  state = {
    filters: {
      type: 'trending',
      request: '',
      number: '12',
    },
    images: [],
  };

  componentDidMount() {
    this.search('trending');
  }

  handleFiltersChange = filters => {
    if (parseInt(filters.number) < 1) filters.number = '1';
    if (parseInt(filters.number) > 50) filters.number = '50';
    if (filters.number === '') filters.number = '12';
    this.setState({ filters });
    this.search(filters.type, filters.request, filters.number);
  };

  search = async (type, request = '', number = '12') => {
    const APIKEY = 'pjCHX4LrLMKOXW9FusMNZDv9QDB4lAXP';
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${type}?api_key=${APIKEY}&limit=${number}&q=${request}`
    );
    const responseJson = await response.json();
    let data = await responseJson.data;
    data = data.map(el => ({
      id: el.id,
      url: el.images.downsized.url,
      title: el.title,
    }));
    this.setState({
      images: data,
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
          <GifsList images={this.state.images} />
        </Container>
      </div>
    );
  }
}

export default App;
