import React, { useState } from "react";
import "./styles/App.css";
import Title from "./components/Title";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const App = () => {
  const defaultMarkdown = `# Welcome to Markdown Previewer
## Created by: Veljko SPASIC
[Veljko Spasic](https://www.veljko.app)

\`Inline code\`

\`\`\`
Block of code
console.log("Hello, world!");
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote example

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**Bold Text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Title titleLabel="Markdown Previewer" />
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          className="editor"
        />
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
