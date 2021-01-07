import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

const NavBar = (props) => {
  return (
    <nav>
      {props.navBar.map((nav, idx) =>
        <a key={idx} href={nav.url}> {nav.name} </a>
      )}
    </nav>
  );
}

export default NavBar;