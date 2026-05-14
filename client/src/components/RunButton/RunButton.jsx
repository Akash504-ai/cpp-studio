import "./runButton.css";

function RunButton({ runCode }) {

  return (
    <div className="run-container">

      <button onClick={runCode}>
        Run Code
      </button>

    </div>
  );
}

export default RunButton;