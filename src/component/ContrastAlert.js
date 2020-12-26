import React, { useState, useEffect } from 'react';

const ContrastAlert = ({ ratio, breakpoint, textSize }) => {
  const [fail, setFail] = useState(false);

  useEffect(() => {
    ratio > breakpoint ? setFail(false) : setFail(true);
  }, [breakpoint, ratio]);

  return (
    <>
      {fail ? <div className="contrast-alert">&#9888; {textSize}</div> : null}
    </>
  );
}

export default ContrastAlert;