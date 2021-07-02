import React, { useState } from 'react';
import { DEFAULT_OPTIONS } from './components/options';
import Title from './components/Title';
import Form from './components/Form';
import Image from './components/Image';
import Slider from './components/Slider';
import EditorItem from './components/EditorItem';
import Footer from './components/Footer';

const App = () => {
  // states
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];
  const [imgPath, setImgPath] = useState(
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  );

  // handleChange FUNCTION
  const handleChange = (e) => {
    // update options
    setOptions((prevOptions) => {
      //- loop over old options to create new instance
      const newOptions = prevOptions.map((option, index) => {
        //- check for slected option
        if (index === selectedOptionIndex) {
          //- update value, if yes
          return { ...option, value: e.target.value };
        }
        //- return as it is, if no
        return option;
      });

      //- return new instance
      return newOptions;
    });
  };

  // get image filters FUNCTION
  const getFilters = () => {
    const filters = options.map(
      (option) => `${option.property}(${option.value}${option.unit})`
    );
    return filters.join(' ');
  };

  // handle image submit FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = document.querySelector('.input-btn');
    if (image.value) {
      setImgPath(image.value);
      image.value = '';
    }
  };

  // jsx
  return (
    <main>
      <header>
        {/* title */}
        <Title />
        {/* form */}
        <Form handleSubmit={handleSubmit} />
      </header>

      <section>
        <div className="container">
          {/* image */}
          <article className="image-container">
            <Image filter={getFilters()} background={imgPath} />
          </article>

          {/* slider */}
          <article className="slider-container">
            <Slider
              min={selectedOption.range.min}
              max={selectedOption.range.max}
              value={selectedOption.value}
              handleChange={handleChange}
            />
          </article>

          {/* editor */}
          <article className="editor">
            {options.map((option, index) => (
              <EditorItem
                key={index}
                name={option.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
