import "./output.css";

function OutputPanel({ output }) {

  return (
    <div className="output-panel">

      <h2>Output</h2>

      <pre>{output}</pre>

    </div>
  );
}

export default OutputPanel;