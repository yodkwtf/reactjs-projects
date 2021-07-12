import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer';

function App() {
  // setting up states
  const [markdown, setMarkdown] = useState('## markdown preview');

  // JSX
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
        <p className="cheat">
          Not sure what to do? Check out{' '}
          <a href="https://www.markdownguide.org/cheat-sheet/">cheat-sheet</a>
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default App;
