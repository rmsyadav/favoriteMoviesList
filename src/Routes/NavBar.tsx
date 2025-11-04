import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React from "react";

const NavBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navDropdownRef.current &&
        !navDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    addEventListener("mousedown", handleClickOutside);
    return () => {
      removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div>Movies.com</div>
          <nav className="navbar">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Contact Us
            </NavLink>
            <div
              ref={navDropdownRef}
              style={{
                position: "relative",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Components
              {isMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "25px",
                    right: "0px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    padding: "10px",
                    zIndex: 1000,
                    width: "max-content",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                      rowGap: "10px",
                    }}
                    className="dropdown-content"
                  >
                    <NavLink
                      to="/single-select-dropdown"
                      className={({ isActive }) =>
                        isActive ? "active-dropdown" : "inactive-dropdwon"
                      }
                    >
                      Single-select-dropdown
                    </NavLink>
                    <NavLink
                      to="/multi-select-dropdown"
                      className={({ isActive }) =>
                        isActive ? "active-dropdown" : "inactive-dropdwon"
                      }
                    >
                      Multi-select-dropdown
                    </NavLink>
                    <NavLink
                      to="/input-search-field"
                      className={({ isActive }) =>
                        isActive ? "active-dropdown" : "inactive-dropdwon"
                      }
                    >
                      Input-search-field
                    </NavLink>
                    <NavLink
                      to="/checkbox"
                      className={({ isActive }) =>
                        isActive ? "active-dropdown" : "inactive-dropdwon"
                      }
                    >
                      Checkbox
                    </NavLink>
                    <NavLink
                      to="/custom-table"
                      className={({ isActive }) =>
                        isActive ? "active-dropdown" : "inactive-dropdwon"
                      }
                    >
                      Custom-table
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
