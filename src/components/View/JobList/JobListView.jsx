import ListHeader from "../../Header/List/ListHeader";
import JobsList from "../../List/Jobs/JobsList";

const JobListView = () => {

  return (
    <div className="grid grid-cols-1 divide-y-2 text-center container mx-auto bg-slate-100">
      <ListHeader/>
      <JobsList/>
    </div>
  );
}

export default JobListView;