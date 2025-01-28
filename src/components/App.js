<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownApp = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(marked(markdown)); // Convert markdown to HTML
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownApp;


