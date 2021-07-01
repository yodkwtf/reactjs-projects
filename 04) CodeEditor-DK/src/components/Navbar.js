import React from 'react';

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <h3>CodeEditor-DK</h3>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option>cobalt</option>
          <option>dracula</option>
          <option>isotope</option>
          <option>liquibyte</option>
          <option>material</option>
          <option>material-ocean</option>
          <option>material-palenight</option>
          <option>monokai</option>
          <option>the-matrix</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
