const AddJobModal = () => {
  // create modal form for adding job offer

  return (
    <div className="modal" id="add-job-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Job Offer</h5>
            <button type="button" className="close" data-modal-close="add-job-modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input type="text" className="form-control" id="jobTitle" placeholder="Job Title" />
            </div>
            <div className="form-group">
              <label htmlFor="jobDescription">Job Description</label> 
              <textarea className="form-control" id="jobDescription" rows="3" placeholder="Job Description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="jobLocation">Job Location</label>
              <input type="text" className="form-control" id="jobLocation" placeholder="Job Location" />
            </div>
            <div className="form-group">
              <label htmlFor="jobSalary">Job Salary</label>
              <input type="text" className="form-control" id="jobSalary" placeholder="Job Salary" />
            </div>
            <div className="form-group">
              <label htmlFor="jobType">Job Type</label>
              <select className="form-control" id="jobType">
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="jobCategory">Job Category</label>
              <select className="form-control" id="jobCategory">
                <option>IT</option>
                <option>Finance</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>HR</option>
                <option>Admin</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="jobTags">Job Tags</label>
              <input type="text" className="form-control" id="jobTags" placeholder="Job Tags" />
            </div>
            <div className="form-group">
              <label htmlFor="jobRequirements">Job Requirements</label>
              <input type="text" className="form-control" id="jobRequirements" placeholder="Job Requirements" />
            </div>
            <div className="form-group">
              <label htmlFor="jobBenefits">Job Benefits</label>
              <input type="text" className="form-control" id="jobBenefits" placeholder="Job Benefits" />
            </div>
            <div className="form-group">
              <label htmlFor="jobDeadline">Job Deadline</label>
              <input type="text" className="form-control" id="jobDeadline" placeholder="Job Deadline" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-modal-close="add-job-modal">Add Job Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJobModal;