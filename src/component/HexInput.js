import React, { useState } from 'react';

const HexInput = ({ labelText, field }) => {
  let updateTimeout = null;
  const hexRegex6 = /^#[0-9A-F]{6}$/i;
  const hexRegex3 = /^#([0-9a-f]{3}){1,2}$/i;

  const [fieldType] = useState(field);
  const [defaultColour, setDefault] = React.useState('#eeeeee');
  const [colourInput, setColourInput] = React.useState(defaultColour);
  const [colour, setColour] = React.useState(defaultColour);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    if (fieldType === 'background') {
      document.body.style.background = colour;
    }
    else if (fieldType === 'foreground') {
      document.getElementById('fg-text').style.color = colour;
    }
  }, [colour, fieldType]);

  const handleChange = (e) => {
    setColourInput(e.target.value);
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      if (hexRegex6.test(e.target.value) || hexRegex3.test(e.target.value)) {
        setErr(false);
        setDefault(e.target.value);
        setColour(e.target.value);
      } else {
        setErr(true);
        setColour(defaultColour);
      }
    }, 1000);
  }

  return (
    <div className="input-fields">
      <div className="text-field">
        <label>
          {labelText}
          <input
            type="text"
            name="colour"
            value={colourInput}
            maxLength="7"
            className="text-input"
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        {err ? <div className="error-message">Invalid hex code!</div> : null}
      </div>
      <div className="colour-field">
        <input
          className="colour-picker"
          type="color"
          value={colourInput}
          onChange={handleChange}
          aria-label={`colour-picker-for-${labelText}`}
        />
      </div>
    </div>
  )
}

export default HexInput;
