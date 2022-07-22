import ListPage from "../List/ListPage";
import WelcomePage from "../Welcome/WelcomePage";

import { useSelector } from 'react-redux';

const AppPage = () => {
  const { visitor } = useSelector(state => state.visitor);

  return (
    <div className="text-center">
      { visitor === undefined ? <WelcomePage/> : <ListPage/> }
    </div>
  );
}

export default AppPage;