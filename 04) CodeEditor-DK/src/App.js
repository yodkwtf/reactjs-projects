import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Editor from './components/Editor';
import Output from './components/Output';
import Navbar from './components/Navbar';

function App() {
  // states
  const [html, setHtml] = useLocalStorage('html');
  const [css, setCss] = useLocalStorage('css');
  const [js, setJs] = useLocalStorage('js');
  const [sourceCode, setSourceCode] = useState('');
  const [theme, setTheme] = useState('material');

  // useEffect
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setSourceCode(`
      <html>
        <body> ${html} </body>
        <style> ${css} </style>
        <script> ${js} </script>
      </html>  
    `),
      500
    );

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // jsx
  return (
    <main>
      {/* nav */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* input */}
      <section className="top-half">
        <Editor
          title="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
          theme={theme}
        />
        <Editor
          title="CSS"
          language="css"
          value={css}
          onChange={setCss}
          theme={theme}
        />
        <Editor
          title="JS"
          language="javascript"
          value={js}
          onChange={setJs}
          theme={theme}
        />
      </section>

      {/* output */}
      <section className="bottom-half">
        <Output sourceCode={sourceCode} />
      </section>
    </main>
  );
}

export default App;
