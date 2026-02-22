export default function ClickButton(props) {
  const { message, count, callback } = props;

  return (
    <button
      className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900"
      onClick={() => {
        callback(count + 1);
      }}
    >
      {message}
    </button>
  );
}
