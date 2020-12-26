import React, { useState, useEffect } from 'react';
import './App.css';
import contrastRatio from './util/contrastRatio';
import HexInput from './component/HexInput';
import ContrastAlert from './component/ContrastAlert';

function App() {
  const [L1, setL1] = useState(1);
  const [L2, setL2] = useState(0);;
  const [ratio, setRatio] = useState(contrastRatio(L1, L2));

  const updateL1 = (val) => {
    setL1(val);
  }
  const updateL2 = (val) => {
    setL2(val);
  }

  useEffect(() => {
    setRatio(contrastRatio(L1, L2))
  }, [L1, L2]);

  return (
    <div className="App">
      <main>
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
          <div className="alert-wrapper">
            <ContrastAlert ratio={ratio} breakpoint={7} textSize="Normal text" />
            <ContrastAlert ratio={ratio} breakpoint={4.5} textSize="Big text" />
          </div>
          <h1>Contrast Ratio: {ratio}</h1>
        </div>
        <div className="input-wrapper">
          <HexInput
            labelText="text"
            field="foreground"
            initialColour="#000000"
            update={updateL1}
          />
          <HexInput
            labelText="background"
            field="background"
            initialColour="#FFFFFF"
            update={updateL2}
          />
        </div>
      </main>
      <footer>
        <p id="legend">&#9888; = Failed WCAG AAA</p>
        <p>
          <a
            href="https://www.w3.org/TR/WCAG20-TECHS/G17#G17-procedure"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            calculations based on W3C
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
