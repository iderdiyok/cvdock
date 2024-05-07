export default function calculateElementHeight(element) {
  debugger
  const style = window.getComputedStyle(element);
  const fontSize = parseFloat(style.fontSize);
  const lineHeight = parseFloat(style.lineHeight);
  const marginTop = parseFloat(style.marginTop);
  const marginBottom = parseFloat(style.marginBottom);

  const elementHeight =
    (fontSize + (lineHeight - fontSize) * 0.5 + marginTop + marginBottom) *
    element.childElementCount;

  return elementHeight;
}
