import "./input.css";

function InputPanel({ input, setInput }) {

  return (
    <div className="input-panel">

      <h2>Input</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter program input..."
      />

    </div>
  );
}

export default InputPanel;