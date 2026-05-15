import "./output.css";

function OutputPanel({ output }) {
  // Enhanced error/warning detection
  const isError = /error|exception|failed/i.test(output);
  const isWarning = /warning/i.test(output);

  return (
    <div className={`output-panel ${isError ? "has-error" : ""}`}>
      <div className="output-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="output-title">Console Output</span>
        {output && (
          <span className={`status-badge ${isError ? "err" : "success"}`}>
            {isError ? "Execution Failed" : "Success"}
          </span>
        )}
      </div>

      <div className="output-body">
        {output ? (
          <pre className={isError ? "text-error" : isWarning ? "text-warning" : "text-success"}>
            {output}
          </pre>
        ) : (
          <div className="output-placeholder">
            <p>Run your code to see the output here...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;