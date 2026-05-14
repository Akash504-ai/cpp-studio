import "./runButton.css";

function RunButton({ runCode, loading }) {

  return (
    <div className="run-container">

      <button
        onClick={runCode}
        disabled={loading}
      >
        {loading ? "Running..." : "Run Code"}
      </button>

    </div>
  );
}

export default RunButton;