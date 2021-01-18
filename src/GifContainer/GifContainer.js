import React from 'react';
import './GifContainer.css';
import GifItem from './GifItem/GifItem';

class GifContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifsData: [],
    };
  }

  componentDidMount() {
    this.fetchGifs('trending');
  }

  async fetchGifs(type, request = '') {
    const APIKEY = 'pjCHX4LrLMKOXW9FusMNZDv9QDB4lAXP';
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${type}?api_key=${APIKEY}&limit=8&q=${request}`
    );
    const responseJson = await response.json();
    let data = await responseJson.data;
    data = data.map(el => ({
      id: el.id,
      url: el.images.downsized.url,
      height: el.images.downsized.height,
      width: el.images.downsized.width,
      title: el.title,
    }));
    this.setState({
      gifsData: data,
    });
  }

  render() {
    return (
      <div className="GifContainer">
        {this.state.gifsData.map(obj => (
          <GifItem
            src={obj.url}
            alt={obj.title}
            key={obj.id}
            height={obj.height}
            width={obj.width}
          />
        ))}
      </div>
    );
  }
}
export default GifContainer;
