import { useSelector } from "react-redux";

const ApplyButton = () => {
  const { visitor } = useSelector(state => state.visitor);
  const hidden = (visitor === "company") ? true : false;

  return (
    <div>
      <button className="btn btn-primary border-slate-300 border-2 rounded-md p-2 bg-slate-200" hidden={hidden}>
        Apply
      </button>
    </div>
  );
}

export default ApplyButton;