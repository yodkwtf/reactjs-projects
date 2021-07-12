import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/liquibyte.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/the-matrix.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FaCompress, FaExpandAlt } from 'react-icons/fa';

const Editor = ({ title, value, onChange, language, theme }) => {
  // states
  const [open, setOpen] = useState(true);

  // handleChange FUNCTION
  const handleChange = (editor, data, value) => {
    //- on everychange handlechange is called which calls onchange with value as the argument which in turn calls setHtml with value as argument again
    onChange(value);
  };

  // jsx
  return (
    <article
      className={`${open ? 'editor-container' : 'editor-container closed'}`}
    >
      {/* header */}
      <header className="editor-header">
        {title}
        <button onClick={() => setOpen(!open)}>
          {open ? <FaCompress /> : <FaExpandAlt />}
        </button>
      </header>

      {/* editor */}
      <ControlledEditor
        className="editor"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          theme,
          mode: language,
        }}
      />
    </article>
  );
};

export default Editor;
