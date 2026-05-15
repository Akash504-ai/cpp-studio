import "./runButton.css";

function RunButton({ runCode, loading }) {
  return (
    <div className="run-container">
      <button
        className={`run-btn ${loading ? "is-loading" : ""}`}
        onClick={runCode}
        disabled={loading}
      >
        <div className="btn-content">
          {loading ? (
            <svg className="spinner" viewBox="0 0 24 24">
              <circle className="path" cx="12" cy="12" r="10" fill="none" strokeWidth="4"></circle>
            </svg>
          ) : (
            <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          <span>{loading ? "Compiling..." : "Run Code"}</span>
        </div>
        <kbd className="shortcut-hint">Ctrl + Enter</kbd>
      </button>
    </div>
  );
}

export default RunButton;