import React from 'react';

const Output = ({ sourceCode }) => {
  return (
    <iframe
      srcDoc={sourceCode}
      title="output"
      width="100%"
      height="100%"
      frameBorder="0"
      sandbox="allow-scripts"
    />
  );
};

export default Output;
