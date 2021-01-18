import './App.css';
import Container from './Container/Container';
import Search from './Search/Search';
import GifContainer from './GifContainer/GifContainer';

function App() {
  return (
    <div className="App">
      <Container>
        <Search />
        <GifContainer />
      </Container>
    </div>
  );
}

export default App;
