/**
 * An identity pass-through tagged template literal function
 * just so I can get syntax highlighting etc. from vscode
 */
export function css(strings, ...values) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (values[i] || "");
  });
  return str;
}
