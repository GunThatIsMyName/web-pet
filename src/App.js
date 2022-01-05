
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './components';
import {Game, Home, Show} from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


export default App;
