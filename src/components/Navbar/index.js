import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import "./index.css";
import { Link } from "react-router-dom";
import { menuItemsList } from "../../constants/index";
import Logo from "../../assets/logo/logoPinkTransperant.png";

const Navbar = () => {
  // State variables
  const [selectedItem, setSelectedItem] = useState(null); // Keeps track of the currently selected menu item
  const [clicked, setClicked] = useState(false); // Tracks whether the menu icon is clicked or not
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Tracks window width for responsive design
  const [navbarColor, setNavbarColor] = useState("transparent"); // Background color of the navbar
  const [mobileNavbarColor, setMobileNavbarColor] = useState("#000"); // Background color of the navbar on mobile devices
  const [navbarTextColor, setNavbarTextColor] = useState("#ffffff"); // Text color of the navbar items
  const [hoveredItem, setHoveredItem] = useState(null); // Tracks the currently hovered menu item

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Change the color based on the scroll position
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#ffffff");
        setNavbarTextColor("#000000");
        setMobileNavbarColor("#ffffff");
      } else {
        setNavbarColor("transparent");
        setNavbarTextColor("#ffffff");
        setMobileNavbarColor("#000000");
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener for scroll and resize events
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Style for the menu list based on window width
  const menuListStyles = {
    backgroundColor: windowWidth <= 596 ? mobileNavbarColor : navbarColor,
  };

  // Function to handle mouse hover over menu items
  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  // Function to handle mouse leaving menu items
  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav style={{ backgroundColor: navbarColor }}>
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={() => setSelectedItem(null)}>
          <img src={Logo} alt="logo" className="logo_img" />
        </Link>
        <span className="logo_sub">you Believe We Achieve</span>
      </div>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        {clicked ? (
          <div className="times" style={{ color: navbarTextColor }}>
            <FaTimes height={30} wid />
          </div>
        ) : (
          <div style={{ color: navbarTextColor }} className="bars">
            <FaBarsStaggered />
          </div>
        )}
      </div>
      {/* Menu Items */}
      <ul
        className={clicked ? "menu-list" : "menu-list close"}
        style={menuListStyles}
      >
        {menuItemsList.map((item) => (
          <Link to={item.path} key={item.title}>
            <li
              style={{
                color:
                  selectedItem === item || hoveredItem === item
                    ? "#FF6247" // Change this to your hover color
                    : navbarTextColor,
                cursor: "pointer",
              }}
              className="menuList_hover"
              onClick={() => {
                setSelectedItem(item);
                setClicked(false); // Close the menu after clicking
              }}
              onMouseEnter={() => handleItemHover(item)}
              onMouseLeave={handleItemLeave}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
