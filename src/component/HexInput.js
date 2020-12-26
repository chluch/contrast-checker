import React, {useState, useEffect} from 'react';
import hexToRbg from '../util/hexToRbg';
import calcLuminance from '../util/luminance';

const HexInput = ({ labelText, field, initialColour, update }) => {
  const hexRegex6 = /^#[0-9A-F]{6}$/i;
  const hexRegex3 = /^#([0-9a-f]{3}){1,2}$/i;

  const [fieldType] = useState(field);
  const [defaultColour, setDefault] = useState(initialColour);
  const [colourInput, setColourInput] = useState(defaultColour);
  const [colour, setColour] = useState(defaultColour);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (fieldType === 'background') {
      document.body.style.background = colour;
      update(calcLuminance(hexToRbg(colour)));
    }
    else if (fieldType === 'foreground') {
      document.getElementById('fg-heading').style.color = colour;
      document.getElementById('fg-paragraph').style.color = colour;
      document.querySelector('.text-demo').style.borderColor = colour;
      update(calcLuminance(hexToRbg(colour)));
    }
  }, [colour, fieldType, update]);

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
