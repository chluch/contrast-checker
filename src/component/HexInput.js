import React, { useState } from 'react';

const HexInput = ({ labelText, field }) => {
  const hexRegex6 = /^#[0-9A-F]{6}$/i;
  const hexRegex3 = /^#([0-9a-f]{3}){1,2}$/i;

  const [fieldType] = useState(field);
  const [defaultColour, setDefault] = React.useState('');
  const [colourInput, setColourInput] = React.useState(defaultColour);
  const [colour, setColour] = React.useState(defaultColour);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    if (fieldType === 'background') {
      document.body.style.background = colour;
    }
    else if (fieldType === 'foreground') {
      document.getElementById('fg-heading').style.color = colour;
      document.getElementById('fg-paragraph').style.color = colour;
      document.querySelector('.text-demo').style.borderColor = colour;
    }
  }, [colour, fieldType]);

  const handleTextChange = (e) => {
    setColourInput(e.target.value);
    if (hexRegex6.test(e.target.value) || hexRegex3.test(e.target.value)) {
      setErr(false);
      setDefault(e.target.value);
      setColour(e.target.value);
    } else {
      setErr(true);
      setColour(defaultColour);
    }
  }

  const handleColourChange = (e) => {
    setDefault(e.target.value);
    setColourInput(e.target.value);
    setColour(e.target.value);
    setErr(false);
  }

  return (
    <div className="input-fields">
      <div className="text-field">
        <label>
          {labelText}
          <input
            type="text"
            name="colour"
            placeholder="#hex"
            value={colourInput}
            maxLength="7"
            className="text-input"
            autoComplete="off"
            onChange={handleTextChange}
          />
        </label>
        {err ? <div className="error-message">Invalid hex code!</div> : null}
      </div>
      <div className="colour-field">
        <input
          className="colour-picker"
          type="color"
          value={colourInput}
          onChange={handleColourChange}
          aria-label={`colour-picker-for-${labelText}`}
        />
      </div>
    </div>
  )
}

export default HexInput;
