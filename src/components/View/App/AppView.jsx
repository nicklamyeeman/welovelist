import JobListView from "../JobList/JobListView";
import WelcomeView from "../Welcome/WelcomeView";

import { useSelector } from 'react-redux';

const AppView = () => {
  const { visitor } = useSelector(state => state.visitor);

  if (visitor === undefined) {
    return (
      <WelcomeView/>
    );
  } else {
    return (
      <JobListView/>
    );
  }
      
}

export default AppView;