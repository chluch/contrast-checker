const contrastRatio = (l1, l2) => {
  if (l1 > l2) {
    return ((l1 + 0.05) / (l2 + 0.05)).toFixed(2);
  }
  return ((l2 + 0.05) / (l1 + 0.05)).toFixed(2);
}

export default contrastRatio;
