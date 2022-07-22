import { useSelector } from "react-redux";

import JobCard from "../../Card/Job/JobCard";

const ListView = () => {
  const { jobs } = useSelector(state => state.jobs);

  return (
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
  );
}

export default ListView;