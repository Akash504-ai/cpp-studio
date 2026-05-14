import Editor from "@monaco-editor/react";

import "./editor.css";

function CodeEditor({ code, setCode }) {

  return (
    <div className="editor-container">

      <Editor
        height="100%"
        defaultLanguage="cpp"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />

    </div>
  );
}

export default CodeEditor;