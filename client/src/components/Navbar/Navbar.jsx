import "./navbar.css";

function Navbar({ runCode, loading }) {
  return (
    <nav className="navbar">

      <div className="nav-left">

        <div className="logo-container">
          <span className="logo-symbol">++</span>

          <h1 className="logo-text">
            CPP<span>Studio</span>
          </h1>
        </div>

        <div className="nav-divider"></div>

        <div className="project-info">
          <span className="pulse-icon"></span>

          <span className="status-text">
            Cloud Compiler Active
          </span>
        </div>

      </div>

      <div className="nav-right">

        <button
          className={`run-btn ${loading ? "is-loading" : ""}`}
          onClick={runCode}
          disabled={loading}
        >

          <div className="btn-content">

            {loading ? (
              <svg className="spinner" viewBox="0 0 24 24">
                <circle
                  className="path"
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  strokeWidth="4"
                ></circle>
              </svg>
            ) : (
              <svg
                className="play-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}

            <span>
              {loading ? "Compiling..." : "Run Code"}
            </span>

          </div>

          <kbd className="shortcut-hint">
            Ctrl + Enter
          </kbd>

        </button>

        <div className="user-avatar">
          C++
        </div>

      </div>

    </nav>
  );
}

export default Navbar;