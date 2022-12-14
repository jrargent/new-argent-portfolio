import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <div className="Header-Box">
        <h1>
          <a href="/">Argent Portfolio</a>
        </h1>
      </div>

      <Nav></Nav>
    </header>
  );
}

export default Header;
