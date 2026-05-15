import Editor from "@monaco-editor/react";
import "./editor.css";

function CodeEditor({ code, setCode }) {
  const editorOptions = {
    fontSize: 14,
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    minimap: { enabled: false }, // Cleaner for smaller viewports
    scrollBeyondLastLine: false,
    cursorBlinking: "smooth",
    cursorSmoothCaretAnimation: "on",
    lineNumbers: "on",
    padding: { top: 16, bottom: 16 },
    backgroundColor: "#1e1e1e",
    smoothScrolling: true,
  };

  return (
    <div className="editor-wrapper">
      {/* Visual Header Tab */}
      <div className="editor-tab">
        <span className="tab-icon">C++</span>
        <span className="tab-name">main.cpp</span>
      </div>
      
      <div className="editor-container">
        <Editor
          height="100%"
          defaultLanguage="cpp"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
          options={editorOptions}
        />
      </div>
    </div>
  );
}

export default CodeEditor;