import React from 'react';

const Form = ({ handleSubmit }) => {
  return (
    <form className="form">
      <input
        type="text"
        className="input-btn"
        placeholder="Enter a valid image URL"
      />
      <button
        type="submit"
        className="submit-btn"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
