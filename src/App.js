import './App.css';
import Container from './Container/Container';
import Search from './Search/Search';
import GifsList from './GifsList/GifsList';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.state = {
      filters: {
        type: 'trending',
        request: '',
      },
      images: [],
    };
  }

  componentDidMount() {
    this.search('trending');
  }

  handleFiltersChange = filters => {
    this.setState({ filters });
    this.search(filters.type, filters.request);
  };

  search = async (type, request = '') => {
    const APIKEY = 'pjCHX4LrLMKOXW9FusMNZDv9QDB4lAXP';
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${type}?api_key=${APIKEY}&limit=12&q=${request}`
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
        <Container>
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
