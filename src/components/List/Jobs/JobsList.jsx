import { useSelector } from "react-redux";

import JobCard from "../../Card/Job/JobCard";

const JobsList = () => {
  const { jobs } = useSelector(state => state.jobs);
  console.log(jobs);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 divide-y-2 text-center container mx-auto bg-slate-100">
        {jobs && jobs.map(job => (
          <div key={job.id}>
            <JobCard
              job={job}
            />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default JobsList;