import { useState } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import CodeEditor from "../components/Editor/CodeEditor.jsx";
import InputPanel from "../components/InputPanel/InputPanel.jsx";
import OutputPanel from "../components/OutputPanel/OutputPanel.jsx";

import { DEFAULT_CODE } from "../constants";

import { executeCppCode } from "../services/compileService";

function Home() {

  const [code, setCode] = useState(DEFAULT_CODE);

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const runCode = async () => {

    setLoading(true);

    setOutput("Running...");

    const result = await executeCppCode(code, input);

    setOutput(result);

    setLoading(false);

  };

  return (
    <div className="app">

      <Navbar
        runCode={runCode}
        loading={loading}
      />

      <div className="main-layout">

        <div className="editor-section">
          <CodeEditor
            code={code}
            setCode={setCode}
          />
        </div>

        <div className="side-panels">

          <InputPanel
            input={input}
            setInput={setInput}
          />

          <OutputPanel
            output={output}
          />

        </div>

      </div>

    </div>
  );
}

export default Home;