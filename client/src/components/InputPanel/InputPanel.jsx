import "./input.css";

function InputPanel({ input, setInput }) {
  return (
    <div className="input-panel">
      <div className="panel-header">
        <div className="panel-label">
          <svg className="panel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span>Standard Input</span>
        </div>
        <button 
          className="clear-btn" 
          onClick={() => setInput("")}
          title="Clear Input"
        >
          Clear
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="/* Type your program arguments here... */"
        spellCheck="false"
      />
    </div>
  );
}

export default InputPanel;