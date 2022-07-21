// import WelcomeOverlay from "../../Overlay/Welcome/WelcomeOverlay";

import { useDispatch } from 'react-redux';
import { setVisitor } from '../../../app/slices/visitorSlice';

const WelcomeView = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(setVisitor("applicant"))}>applicant</button>
      <button onClick={() => dispatch(setVisitor("company"))}>company</button>
    </>
  )
}

export default WelcomeView;