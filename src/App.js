import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Netflix Original" fetchURL={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated Movies" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
