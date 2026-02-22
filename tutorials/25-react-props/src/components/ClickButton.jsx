const ClickButton = (props) => {
  const { message } = props;

  return (
    <button className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900">
      {message}
    </button>
  );
};

export default ClickButton;

/*  without props

const ClickButton = () => {

  return (
    <button className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900">
      content
    </button>
  );
};

export default ClickButton;

*/
