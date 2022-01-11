import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
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
          {!isLoggedIn && <Route path="/" element={<Login />} />}

          {isLoggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />}>
                <Route path="" element={<Control />} />
                <Route path="shop" element={<Shop />} />
              </Route>
              <Route path="/show" element={<Show />} />
            </>
          )}

          {/* EVERY WRORN ROUTE GOES TO HOME */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
