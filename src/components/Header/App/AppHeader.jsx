import { useDispatch } from 'react-redux';
import { setVisitor } from '../../../app/slices/visitorSlice';

const AppHeader = () => {
  const dispatch = useDispatch();

  return (
    <header className="bg-blue-800 text-white">
      <div className="cursor-pointer" onClick={() => dispatch(setVisitor(undefined))}>
        <h1 className="text-3xl font-bold text-left p-5">
          We Love List
        </h1>
      </div>
    </header>
  );
}

export default AppHeader;