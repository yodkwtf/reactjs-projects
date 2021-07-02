import React from 'react';

const Image = ({ filter, background }) => {
  return (
    <div
      className="image"
      style={{
        filter: filter,
        background: `url(${background}) center/contain no-repeat`,
      }}
    ></div>
  );
};

export default Image;
