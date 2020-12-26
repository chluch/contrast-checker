import React from 'react';
import './App.css';
import HexInput from './component/HexInput';

function App() {
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
      <div className="input-wrapper">
        <HexInput labelText="text" field="foreground" />
        <HexInput labelText="background" field="background" />
      </div>
    </div>
  );
}

export default App;
