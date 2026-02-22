const Banner = ({ count }) => {
  return (
    <div className="w-32 h-32 bg-slate-800 rounded flex items-center justify-center mt-4 mx-auto text-6xl font-bold">
      {count}
    </div>
  );
};

export default Banner;

/* without props 

const Banner = () => {
  return (
    <div className="w-32 h-32 bg-slate-800 rounded flex items-center justify-center mt-4 mx-auto text-6xl font-bold">
      content
    </div>
  );
};

export default Banner;

*/
