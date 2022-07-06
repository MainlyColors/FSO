export default function ({ message }) {
  if (message === null) return null;
  return <div className="good notification">{message}</div>;
}
