import React from 'react';

const EditorItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`${active ? 'editor-item active' : 'editor-item'}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default EditorItem;
