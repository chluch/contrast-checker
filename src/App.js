import React from 'react';
import './App.css';
import HexInput from './component/HexInput';

function App() {
  const hexToRbg = (hex) => {
    hex = hex.substring(1);
    if (hex.length === 3) {
      hex = hex.split('')
        .map((char) => char + char)
        .join('');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  }

  const luminance = (rgbArr) => {
    const temp = rgbArr.map((value) => {
      const sRGB = value / 255;
      if (sRGB <= 0.03928) {
        return sRGB / 12.92;
      }
        return Math.pow(((sRGB + 0.055) / 1.055), 2.4);
    });
    return 0.2126 * temp[0] + 0.7152 * temp[1] + 0.0722 * temp[2];
  }

  const contrastRatio = (l1, l2) => {
    if (l1 > l2) {
      return ((l1 + 0.05) / (l2 + 0.05)).toFixed(2);
    }
    return ((l2 + 0.05) / (l1 + 0.05)).toFixed(2);
  }

  return (
    <div className="App">
      <div className="text-wrapper">
        <div className="text-demo">
          <h1 id="fg-heading">Hello World</h1>
          <p id="fg-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit consequat
            congue. Donec eleifend laoreet turpis vel laoreet. Cras finibus tellus in dui euismod,
            quis laoreet purus interdum. Donec vestibulum tincidunt odio, vel gravida justo ultrices in.
            Vivamus sodales odio sit amet risus hendrerit, eu finibus mi viverra. Maecenas mollis felis
            ante, ornare luctus nisl efficitur id. Curabitur eget nisl risus. Morbi non dapibus odio.
            Morbi porta, erat a interdum tincidunt, dolor dolor laoreet nisi, in mattis ligula urna quis
            ex.
      </p>
        </div>
      </div>
      <div className="contrast-wrapper">
        <h1>Contrast Ratio:</h1>
      </div>
      <div className="input-wrapper">
        <HexInput labelText="text" field="foreground" />
        <HexInput labelText="background" field="background" />
      </div>
    </div>
  );
}

export default App;
