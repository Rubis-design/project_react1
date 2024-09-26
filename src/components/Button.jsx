export function Button({ onClick, text }) {
  return <button onClick={() => onClick(text)}>Click me</button>;
}
