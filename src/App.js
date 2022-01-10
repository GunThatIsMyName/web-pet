import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useUserContext} from './context/UserContext';
import {Game, Home, Show} from './routes';

import {Control, Loader, Login, Navbar, Sidebar} from './components';
import Shop from './routes/Shop';

const App = () => {
  const {user, loading} = useUserContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="/game" element={isLoggedIn ? <Game /> : <Login />}>
            <Route path="" element={isLoggedIn ? <Control /> : <Login />} />
            <Route path="shop" element={isLoggedIn ? <Shop /> : <Login />} />
          </Route>
          <Route path="/show" element={isLoggedIn ? <Show /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
