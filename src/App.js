import React from 'react';
import './App.css';
import contrastRatio from './util/contrastRatio';
import HexInput from './component/HexInput';

function App() {
  const [L1, setL1] = React.useState(1);
  const [L2, setL2] = React.useState(0);;
  const [ratio, setRatio] = React.useState(contrastRatio(L1, L2));

  const updateL1 = (val) => {
    setL1(val);
  }
  const updateL2 = (val) => {
    setL2(val);
  }

  React.useEffect(() => {
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
        <p>
          contrast ratio calculated based on&nbsp;
          <a
            href="https://www.w3.org/TR/WCAG20-TECHS/G17#G17-procedure"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            formulas from W3C
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
