export function CounterProvider(props) {
  const { children } = props;
  return <div>{children}</div>;
}

/* second version

export function CounterProvider({ children }) {
  return <div>{children}</div>;
}

*/
