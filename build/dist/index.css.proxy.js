// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "article {\n    margin-left: 10%;\n    margin-right: 10%;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 18px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}