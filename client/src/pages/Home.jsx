import { useState } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import CodeEditor from "../components/Editor/CodeEditor.jsx";
import InputPanel from "../components/InputPanel/InputPanel.jsx";
import OutputPanel from "../components/OutputPanel/OutputPanel.jsx";
import RunButton from "../components/RunButton/RunButton.jsx";

import { DEFAULT_CODE } from "../constants";

function Home() {

  const [code, setCode] = useState(DEFAULT_CODE);

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("Running...");
  };

  return (
    <div className="app">

      <Navbar />

      <div className="main-layout">

        <div className="editor-section">
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <div className="side-panels">

          <InputPanel
            input={input}
            setInput={setInput}
          />

          <OutputPanel output={output} />

        </div>

      </div>

      <RunButton runCode={runCode} />

    </div>
  );
}

export default Home;