const ClickButton = (props) => {
  const { message, count } = props;
  return (
    <button className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900">
      {message} : {count}
    </button>
  );
};

export default ClickButton;
