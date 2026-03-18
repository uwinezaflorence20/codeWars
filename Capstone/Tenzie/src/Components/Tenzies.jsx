import Die from "./Die";
let Tenzies = () => {
  return (
    <div className=" h-screen py-10 pt-20 px-10  bg-gray-900">
      <div className="  flex justify-center items-center gap-4 h-11/12 rounded-2xl pt-20 bg-white">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </div>
  );
};
export default Tenzies;
