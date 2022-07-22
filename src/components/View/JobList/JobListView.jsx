import JobListHeader from "../../Header/JobList/JobListHeader";
import JobsList from "../../List/Jobs/JobsList";

const JobListView = () => {

  return (
    <div className="grid grid-cols-1 divide-y-2 text-center container mx-auto bg-slate-100">
      <JobListHeader/>
      <JobsList/>
    </div>
  );
}

export default JobListView;