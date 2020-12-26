import React from 'react';
import './App.css';

function App() {
  const hexRegex = /^#[0-9A-F]{6}$/i;
  const defaultBg = '#eeeeee';
  const [bgInput, setBgInput] = React.useState(defaultBg);
  const [bg, setBg] = React.useState(defaultBg);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    document.body.style.background = bg;
  }, [bg]);

  let updateTimeout = null;
  const handleBgChange = (e) => {
    setBgInput(e.target.value);
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      if (hexRegex.test(e.target.value)) {
        setErr(false);
        setBg(e.target.value);
      } else {
        setErr(true);
        setBg(defaultBg);
      }
    }, 3000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
      </header>
      <div className="input-field">
      <label>Background
        <input
            type="text"
            name="bg-colour"
            value={bgInput}
            maxLength="7"
            className="text-input"
            onChange={handleBgChange}
          />
        </label>
        {err ? <div className="error-message">Invalid hex code!</div> : null}
        </div>
    </div>
  );
}

export default App;
