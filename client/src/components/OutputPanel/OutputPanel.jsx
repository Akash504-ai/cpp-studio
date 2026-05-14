import "./output.css";

function OutputPanel({ output }) {

  const isError =
    output.includes("error") ||
    output.includes("Error");

  return (
    <div className="output-panel">

      <h2>Output</h2>

      <pre
        style={{
          color: isError ? "#ff4d4f" : "#00ff88"
        }}
      >
        {output}
      </pre>

    </div>
  );
}

export default OutputPanel;