import React, { useState, useEffect } from 'react';
import Values from 'values.js';
function ColorPicker() {
  const [Color, setColor] = useState('');
  const [Error, setError] = useState(false);
  const [List, setList] = useState(new Values('#134ead').all(10));
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('working');
    try {
      const colors = new Values(Color).all(10);
      setList(colors);
      console.log(colors);
      setError(false);

    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="d-inline justify-content-center mt-4"
        onSubmit={handlerSubmit}
      >
        {Error ? <span className='text-center'>Please provide Correct value!!..</span> : 'Enter a Value:'}
        <input
          className={`form-control me-2 `}
          type="text"
          placeholder="Enter a colors Name"
          aria-label="Search"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <button className="btn btn-dark text-center" type="submit">
          Submit
        </button>
      </form>
      <br />
      <div className="d-flex flex-wrap" style={{ gap: '1rem' }}>
        {List.map((color, index) => {
          let hexColor = color.hex;
          return (
            <Picker
              key={index}
              Error={Error}
              hexColor={hexColor}
              {...color}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

function Picker({ rgb, weight, type, hexColor, index }) {
  const [Alert, setAlert] = useState(false);
  let takecolor = rgb.join(',');
  let hexValue = `#${hexColor}`;
  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [Alert]);
  return (
    <div
      className={`w-25 p-2 ${index > 5 ? 'text-white' : 'text-dark'}`}
      style={{ backgroundColor: `rgb(${takecolor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <span className="text-center">{weight}%</span>
      <p className="ms-2 mt-2">{type}</p>
      <span className="text-center">
        {Alert ? 'Copied to your cilpboard' : ''}
      </span>

      <p className="text-end">{hexValue}</p>
    </div>
  );
}

export default ColorPicker;
