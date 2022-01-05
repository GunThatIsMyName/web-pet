import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './components';
import Control from './components/Control';
import {Game, Home, Show} from './routes';
import Shop from './routes/Shop';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />}>
            <Route path="" element={<Control />} />
            <Route path="shop" element={<Shop />} />
          </Route>
          <Route path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
