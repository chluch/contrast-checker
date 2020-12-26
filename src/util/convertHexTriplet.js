  const convertHexTriplet = (hex) => {
    if (hex.length === 4) {
      hex = hex.split('')
      .map((char) => char + char)
      .join('')
      .substring(1);
    }
    return hex;
  }

  export default convertHexTriplet;
  