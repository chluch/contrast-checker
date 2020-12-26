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

export default luminance;
