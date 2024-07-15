import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isCategoryPage =
    location.pathname !== "/home" &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup";

  return (
    <nav>
      <ul>
        {!isHomePage && (
          <>
            {location.pathname !== "/login" &&
              location.pathname !== "/signup" && (
                <li>
                  <Link to="/home">Home</Link>
                </li>
              )}
            {isCategoryPage && (
              <li>
                <Link to={`/trending${location.pathname}`}>Trending</Link>
              </li>
            )}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;