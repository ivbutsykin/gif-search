import './App.css';
import Container from './Container/Container';
import Search from './Search/Search';
import GifsList from './GifsList/GifsList';

function App() {
  return (
    <div className="App">
      <Container>
        <Search />
        <GifsList />
      </Container>
    </div>
  );
}

export default App;
