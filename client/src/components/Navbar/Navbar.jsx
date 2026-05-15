import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <span className="logo-symbol">++</span>
          <h1 className="logo-text">CPP<span>Studio</span></h1>
        </div>
        <div className="nav-divider"></div>
        <div className="project-info">
          <span className="pulse-icon"></span>
          <span className="status-text">Cloud Compiler Active</span>
        </div>
      </div>
      
      <div className="nav-right">
        <button className="nav-link">Documentation</button>
        <button className="nav-link">Settings</button>
        <div className="user-avatar">C++</div>
      </div>
    </nav>
  );
}

export default Navbar;