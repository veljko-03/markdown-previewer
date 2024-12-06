// Imports
import { useState } from "react";
import { marked } from "marked";

import "./styles/App.css";
import defaultMarkdown from "./components/defaultMarkdown";
import Title from "./components/Title";
import Editor from "./components/Editor";

// Configure marked to interpret line breaks as <br>
marked.setOptions({
  breaks: true,
});

// Main component
const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Title titleLabel="Markdown Previewer" />
      <div className="container">
        <Editor id="editor" value={markdown} onChange={handleChange} />
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default App;
