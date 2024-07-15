import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navigation from "./Navigation";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import TShirts from "./components/TShirts";
import Shirts from "./components/Shirts";
import Footwear from "./components/Footwear";
import Frocks from "./components/Frocks";
import Sportswear from "./components/Sportswear";
import Beauty from "./components/Beauty";
import Kidswear from "./components/Kidswear";
import Kurtas from "./components/Kurtas";
import Lehangas from "./components/Lehangas";
import Sarees from "./components/Sarees";
import Westernwear from "./components/Westernwear";
import Jeans from "./components/Jeans";
import Trending from "./components/Trending";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/tshirts"
          element={isAuthenticated ? <TShirts /> : <Navigate to="/login" />}
        />
        <Route
          path="/shirts"
          element={isAuthenticated ? <Shirts /> : <Navigate to="/login" />}
        />
        <Route
          path="/sportswear"
          element={isAuthenticated ? <Sportswear /> : <Navigate to="/login" />}
        />
        <Route
          path="/footwear"
          element={isAuthenticated ? <Footwear /> : <Navigate to="/login" />}
        />
        <Route
          path="/frocks"
          element={isAuthenticated ? <Frocks /> : <Navigate to="/login" />}
        />
        <Route
          path="/beauty"
          element={isAuthenticated ? <Beauty /> : <Navigate to="/login" />}
        />
        <Route
          path="/sarees"
          element={isAuthenticated ? <Sarees /> : <Navigate to="/login" />}
        />
        <Route
          path="/lehangas"
          element={isAuthenticated ? <Lehangas /> : <Navigate to="/login" />}
        />
        <Route
          path="/kurtas"
          element={isAuthenticated ? <Kurtas /> : <Navigate to="/login" />}
        />
        <Route
          path="/kidswear"
          element={isAuthenticated ? <Kidswear /> : <Navigate to="/login" />}
        />
        <Route
          path="/westernwear"
          element={isAuthenticated ? <Westernwear /> : <Navigate to="/login" />}
        />
        <Route
          path="/jeans"
          element={isAuthenticated ? <Jeans /> : <Navigate to="/login" />}
        />
        <Route
          path="/trending/:category"
          element={isAuthenticated ? <Trending /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;