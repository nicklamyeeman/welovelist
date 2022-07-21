import { useSelector } from "react-redux";

const JobListView = () => {
  const {visitor} = useSelector(state => state.visitor);

  return (
    <div>
      <h1>JobListView</h1>
      {visitor}
    </div>
  );
}

export default JobListView;