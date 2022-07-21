import { useSelector } from "react-redux";

const AddJobOfferButton = () => {
  const {visitor} = useSelector(state => state.visitor);
  const hidden = (visitor === "company") ? false : true;

  return (
    <div>
      <button className="btn btn-primary border-slate-300 border-2 rounded-md p-2 bg-slate-200" hidden={hidden}>
        Add Job Offer
      </button>
    </div>
  );
}

export default AddJobOfferButton;